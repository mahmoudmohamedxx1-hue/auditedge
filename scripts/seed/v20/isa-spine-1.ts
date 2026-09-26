import type { QuizQuestion } from "@/lib/audit-types"

/** P0-2 ISA spine — compact course definitions (reporting cluster, ISA 505,
 *  ISA 520/530). Each lesson carries a full content JSON; each course ends
 *  with a 6-question quiz mirrored into the bank. */

export type SpineLesson = {
  title: string
  durationMin: number
  content: {
    intro: string
    sections: { heading: string; body: string; bullets?: string[] }[]
    keyPoints: string[]
    example?: { title: string; context: string; analysis: string }
    takeaway: string
  }
}

export type SpineQuiz = {
  lessonTitle: string
  questions: QuizQuestion[]
}

export type SpineCourse = {
  code: string
  title: string
  subtitle: string
  description: string
  category: string
  level: string
  cpeHours: number
  icon: string
  accent: string
  featured: boolean
  modules: { title: string; description: string; lessons: SpineLesson[] }[]
  quiz: SpineQuiz
}

export const SPINE_REPORTING: SpineCourse = {
  code: "ISA-700C",
  title: "The ISA 700 Reporting Cluster: Forming & Reporting the Opinion",
  subtitle: "ISA 700 · 701 · 705 · 706 — the standards that decide what your signature means",
  description:
    "A compact, exam-focused walkthrough of the reporting heart of the audit: forming the opinion (ISA 700), Key Audit Matters (ISA 701), modifications (ISA 705) and Emphasis of Matter / Other Matters (ISA 706). Egyptian exam boards over-sample this cluster relentlessly — and it is where field seniors meet their hardest judgment calls.",
  category: "International Standards",
  level: "Intermediate",
  cpeHours: 4,
  icon: "FileText",
  accent: "terracotta",
  featured: true,
  modules: [
    {
      title: "Forming and reporting the opinion",
      description: "ISA 700 architecture and the conclusion chain",
      lessons: [
        {
          title: "ISA 700 — Anatomy of the Auditor's Report",
          durationMin: 14,
          content: {
            intro:
              "The auditor's report is the only output of an audit most users ever read. ISA 700 fixes its architecture so that a reader in Cairo and a regulator in Toronto extract the same meaning from the same pages.",
            sections: [
              {
                heading: "The fixed elements",
                body: "Every report carries: a title identifying the addressee; an Opinion section stating the conclusion in framework terms; a Basis for Opinion section referencing the audit and the ISAs; the auditor's and management's responsibilities; the signature of the firm, the report date and the location. For audits of listed entities, Key Audit Matters and the auditor's independence declaration complete the frame.",
              },
              {
                heading: "The date that anchors everything",
                body: "The report may not be dated earlier than the date on which the auditor has obtained sufficient appropriate audit evidence. That date closes the subsequent-events window (ISA 560) and commits the auditor to knowledge as of that day — facts discovered later follow the ISA 560 after-issuance regime. Egyptian practice adds the statutory formalities: the auditor's report to the general assembly under Companies Law 159/1981 accompanies the ISA-format report.",
              },
              {
                heading: "Fair presentation vs compliance frameworks",
                body: "Under a fair presentation framework (IFRS/EAS), the opinion asks whether the statements present fairly, in all material respects. Under a compliance framework, the wording shifts to prepared in accordance with. The distinction sounds academic until a client's draft mixes the two — then it decides whether the report tells users the statements are decision-useful or merely rule-compliant.",
              },
            ],
            keyPoints: [
              "The report's architecture is fixed by ISA 700: Opinion, Basis for Opinion, responsibilities, signature, date, location.",
              "The report date cannot precede the point of sufficient appropriate evidence — it closes the subsequent-events window.",
              "Fair presentation frameworks take 'present fairly' wording; compliance frameworks take 'prepared in accordance with'.",
              "Egyptian statutory reporting layers the general-assembly report on top of the ISA-format report.",
            ],
            example: {
              title: "The signed-before-evidence trap",
              context:
                "A Cairo firm pre-dates its report to 28 February to meet a bank covenant deadline, while the inventory count at the Alexandria free-zone shed is still scheduled for 3 March.",
              analysis:
                "Evidence post-dating the report breaks ISA 700's dating rule and ISA 560's events coverage — the report asserts a state of knowledge the auditor did not have. The correct path: complete the count procedures, then date. Covenant deadlines never legitimize back-dating.",
            },
            takeaway:
              "The report is a standardized contract with readers — every element has a job, and the date is the signature's warranty of completed work.",
          },
        },
        {
          title: "ISA 701 — Key Audit Matters",
          durationMin: 13,
          content: {
            intro:
              "KAMs turned the auditor's report from a verdict into a narrative. The standard's premise: users benefit from knowing which matters consumed the most judgment — not to re-opine on them, but to understand the audit's center of gravity.",
            sections: [
              {
                heading: "The selection funnel",
                body: "KAMs are drawn from matters communicated to those charged with governance, filtered by the auditor's judgment of what was most significant in this audit. Typical survivors: significant estimates (ECL, impairments), revenue cut-off in December-loaded businesses, related-party clusters, and group-component judgments. Matters addressed in the Material Uncertainty Related to Going Concern paragraph are not repeated as KAMs — they are cross-referenced.",
              },
              {
                heading: "What a KAM paragraph is NOT",
                body: "A KAM is not a qualification, not a clean bill of health, and not a substitute for disclosure. The description explains why the matter was significant and how the audit addressed it — it stops short of re-expressing the opinion-level conclusion on the matter itself. Writing 'we are satisfied with management's estimate' inside a KAM converts a spotlight into an unauthorized assurance statement.",
              },
              {
                heading: "The audit-knowledge loop",
                body: "KAM drafting happens at the end of the audit but is planned from the start: the risk assessment and TCWG communications are the funnel's raw material. Teams that skip the discipline of drafting KAM candidates during fieldwork end up assembling them from memory at signing week — the results read like it.",
              },
            ],
            keyPoints: [
              "KAMs apply mandatorily to listed entities; other audits may opt in.",
              "Selection = matters communicated to TCWG, filtered by the auditor's significance judgment.",
              "A KAM explains why the matter mattered and how it was audited — it does not re-opine on it.",
              "The MUM paragraph and KAMs are cross-referenced, never duplicated.",
            ],
            takeaway: "KAMs are the audit's executive summary written under professional constraints — judgment-driven selection, procedural honesty, zero opinion drift.",
          },
        },
      ],
    },
    {
      title: "Modifying and annotating the report",
      description: "ISA 705 and ISA 706 — when the opinion changes and when only emphasis does",
      lessons: [
        {
          title: "ISA 705 — Qualified, Adverse, Disclaimer",
          durationMin: 15,
          content: {
            intro:
              "Three modifications exist because three things go wrong: the statements are materially wrong (and management will not fix them), the statements are pervasively wrong, or the auditor cannot get the evidence at all. ISA 705 maps each failure to its verdict.",
            sections: [
              {
                heading: "The materiality × pervasiveness grid",
                body: "A material misstatement confined to one balance or disclosure, uncorrected, yields a qualified 'except for' opinion. The same misstatement spread across the statements or touching their fundamental structure (an inappropriate going-concern basis, say) escalates to adverse. On the evidence side: an inability to obtain sufficient appropriate evidence that is material but isolated qualifies; pervasive inability — the auditor cannot conclude at all — disclaims.",
              },
              {
                heading: "The Basis for Modified Opinion",
                body: "The Basis section quantifies: what the misstatement is, its effect on the affected line items, and why the auditor concluded as it did. Users should be able to size the problem from the report alone. Vague language ('certain balances could not be verified') is a reporting failure in itself — the reader must see the EGP amounts and the assertions they touch.",
                bullets: [
                  "Quantify the misstatement and its line-item effects.",
                  "State the framework consequence (not in accordance with...).",
                  "For scope limitations, describe the procedures that could not be performed.",
                ],
              },
              {
                heading: "The Egyptian frequency question",
                body: "In Egyptian practice, qualifications cluster in receivable valuations, inventory obsolescence, related-party completeness, and unlitigated tax exposure — the areas where owner-managed mid-caps resist provisioning. Recognizing these patterns in a draft set of accounts is a planning skill: the modification conversation with management should start at the risk-assessment stage, not at signing week.",
              },
            ],
            keyPoints: [
              "Material + not pervasive misstatement → qualified; material + pervasive misstatement → adverse.",
              "Material + not pervasive evidence gap → qualified; pervasive evidence gap → disclaimer.",
              "The Basis for Modified Opinion quantifies effects — users must be able to size the problem.",
              "Pervasiveness is about spread and structural importance, not intent.",
            ],
            example: {
              title: "6.2m on the line",
              context:
                "Performance materiality 6.4m, overall 9.2m. Management refuses an ECL provision of 6.2m on export receivables; everything else is clean and adjusted.",
              analysis:
                "The misstatement is material (consumes nearly all performance materiality) but confined to one assertion on one balance — an 'except for' valuation qualification. It is not pervasive: the rest of the audit supports the statements as a whole.",
            },
            takeaway: "The modification ladder is mechanical once materiality and pervasiveness are pinned — the judgment lives in those two inputs.",
          },
        },
        {
          title: "ISA 706 — EOM and Other Matter",
          durationMin: 11,
          content: {
            intro:
              "Two paragraphs exist for things the auditor must say that are neither the opinion nor a modification. They are the most misused tools in the reporting kit.",
            sections: [
              {
                heading: "Emphasis of Matter — the spotlight",
                body: "An EOM highlights a matter already appropriately presented and disclosed in the statements that the auditor judges fundamental to users' understanding. The canonical uses: a Material Uncertainty Related to Going Concern cross-reference, a catastrophe's effect disclosed in the notes, uncertainty over a tax assessment's outcome. The EOM never modifies the opinion and never introduces information missing from the statements.",
              },
              {
                heading: "Other Matter — the auditor's context",
                body: "The Other Matter paragraph carries content that is not disclosed in the statements but users need: a restriction on the report's distribution, the fact that prior-period statements were audited by a predecessor, or the auditor's reference to a component auditor's work in the scope section. If the content belongs to the entity's disclosure universe, it is an EOM; if it belongs to the auditor's own context, it is an Other Matter.",
              },
              {
                heading: "The misuse pattern",
                body: "The classic abuse: using an EOM to flag a going-concern uncertainty that is NOT adequately disclosed. That converts a clear ISA 705 qualification case (inadequate disclosure) into a soft-sounding paragraph that misleads users. The test before writing any EOM: is the disclosure adequate? If no, the opinion changes — the EOM is not a pressure valve.",
              },
            ],
            keyPoints: [
              "EOM: already-disclosed matter fundamental to understanding; opinion unchanged.",
              "Other Matter: auditor-side context (distribution restrictions, predecessor, component work).",
              "An EOM can never substitute for missing disclosure — inadequate disclosure means modification.",
              "Both paragraphs sit after the Basis for Opinion with explicit cross-references.",
            ],
            takeaway: "EOM and Other Matter are communication tools, not opinion modifiers — the moment they start doing opinion work, the report is wrong.",
          },
        },
        {
          title: "Workshop — Reading a Report Like an Examiner",
          durationMin: 12,
          content: {
            intro:
              "Exam questions hand you a fact pattern and a half-drafted report. The skill is mapping facts to paragraphs under time pressure. This lesson drills the mapping.",
            sections: [
              {
                heading: "The five-question drill",
                body: "Given any scenario, ask in order: (1) Is the FS materially misstated? (2) Is the misstatement pervasive? (3) Is evidence missing, and how widely? (4) Is the disclosure of the matter adequate? (5) Does anything fundamental-to-understanding need a spotlight? Questions 1-3 select the opinion (ISA 705), question 4 decides EOM vs modification, question 5 selects KAM vs EOM.",
              },
              {
                heading: "Common traps",
                body: "Trap one: 'management promised to fix it next year' — promises do not cure current-period misstatements. Trap two: 'the amount is below overall materiality' — performance materiality exists precisely so a single known misstatement at 97% of it cannot hide behind the total. Trap three: 'the bank has verbally agreed a waiver' — unsigned conditional waivers are going-concern evidence to evaluate, not facts to assume.",
              },
            ],
            keyPoints: [
              "Run the five-question drill: misstatement? pervasive? evidence gap? disclosure adequate? spotlight needed?",
              "Management promises about next year never cure current-period misstatements.",
              "Performance materiality is the working threshold; overall materiality is the backstop.",
              "Unsigned waivers are evidence to evaluate, not assumptions to book.",
            ],
            takeaway: "Report-selection questions are process questions in disguise — the drill makes the process visible.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "Reporting Cluster — Knowledge Check",
    questions: [
      {
        question: "The auditor's report date must be:",
        options: ["No earlier than the date sufficient appropriate evidence was obtained", "The balance sheet date", "The date management approves the FS", "The file assembly deadline"],
        correctIndex: 0,
        explanation: "The report date certifies completed evidence — it closes the subsequent-events window and cannot be back-dated for convenience.",
      },
      {
        question: "A material misstatement affecting ONLY inventory valuation, uncorrected, leads to:",
        options: ["A qualified 'except for' opinion", "An adverse opinion", "A disclaimer", "An unmodified opinion with EOM"],
        correctIndex: 0,
        explanation: "Material but confined to one area = qualified. Pervasiveness — not the amount alone — drives the escalation.",
      },
      {
        question: "KAMs are selected from:",
        options: ["Matters communicated to TCWG, filtered by the auditor's significance judgment", "All risks in the risk register", "The client's requested topics", "Everything management discusses with the auditor"],
        correctIndex: 0,
        explanation: "The funnel starts at TCWG communications and ends at the auditor's judgment of most-significant.",
      },
      {
        question: "An EOM paragraph is appropriate when:",
        options: ["The matter is adequately disclosed and fundamental to users' understanding", "The client refuses to disclose a going-concern uncertainty", "The auditor disagrees with an estimate but it is immaterial", "The opinion is disclaimed"],
        correctIndex: 0,
        explanation: "EOM presupposes adequate disclosure — using it to paper over missing disclosure is the classic misuse.",
      },
      {
        question: "A pervasive inability to obtain sufficient appropriate evidence results in:",
        options: ["Disclaimer of opinion", "Adverse opinion", "Qualified opinion", "Unmodified with Other Matter"],
        correctIndex: 0,
        explanation: "Adverse requires the auditor to KNOW the statements are wrong; pervasive evidence gaps mean the auditor cannot conclude at all — disclaimer.",
      },
      {
        question: "The Basis for Modified Opinion should:",
        options: ["Quantify the misstatement and its effects on specific line items", "Be vague to preserve the relationship", "Blame the predecessor auditor", "Promise improvement next year"],
        correctIndex: 0,
        explanation: "Users must be able to size the problem from the report — amounts, assertions affected, and framework consequence.",
      },
    ],
  },
}

export const SPINE_505: SpineCourse = {
  code: "ISA-505C",
  title: "External Confirmations (ISA 505): Evidence from Third Parties",
  subtitle: "The design, control, and failure paths of audit's most decisive procedure",
  description:
    "Bank balances, receivables, borrowings, terms and contingencies — confirmations put the auditor in direct contact with the counterparty. This compact course covers request design, confirmation control, non-response alternatives, and the fraud patterns confirmations exist to catch.",
  category: "International Standards",
  level: "Foundation",
  cpeHours: 2,
  icon: "Mail",
  accent: "sage",
  featured: false,
  modules: [
    {
      title: "Confirmation mechanics",
      description: "Design, control, and response handling",
      lessons: [
        {
          title: "Why Third-Party Evidence Outranks Client Assertions",
          durationMin: 11,
          content: {
            intro: "Confirmation evidence matters because it does not pass through the client's hands — when the auditor controls the channel.",
            sections: [
              {
                heading: "The reliability ladder",
                body: "Directly obtained external evidence (a bank reply, an original contract from the counterparty) outranks client-held documents, which outrank verbal assertions. ISA 500's reliability rules are why the confirmation procedure is designed the way it is: the auditor selects accounts, prepares requests, sends them, and receives replies — with the client nowhere in the loop.",
              },
              {
                heading: "What confirmations prove — and what they do not",
                body: "A positive reply verifies existence and the terms stated. It says nothing about valuation (a debtor can confirm a balance they cannot pay) or recoverability. Confirming export receivables while ignoring a 120-day aging and the debtor's covenant stress would be procedure theatre: the assertion that matters is valuation, and that needs ECL analysis.",
              },
              {
                heading: "Egyptian field reality",
                body: "Response rates in Egyptian mid-cap audits are the practical constraint: dated addresses, family-owned counterparties slow to reply, and diaspora distributors. The standard anticipates this — follow-up and alternative procedures are part of the design, not an afterthought.",
              },
            ],
            keyPoints: [
              "Confirmations verify existence and terms; valuation needs separate procedures.",
              "The auditor controls selection, preparation, sending, and receiving — always.",
              "Positive requests demand replies either way; negative requests only on disagreement.",
              "Non-response triggers alternatives, not surrender.",
            ],
            takeaway: "A confirmation is only as strong as the auditor's control over the channel — hand the envelope to the client and the evidence is gone.",
          },
        },
        {
          title: "Non-Response, Exceptions, and Fraud Patterns",
          durationMin: 12,
          content: {
            intro: "The interesting confirmations are the ones that do not come back — and the ones that come back wrong.",
            sections: [
              {
                heading: "The alternative-procedure ladder",
                body: "A positive confirmation without reply after follow-up requires alternatives: subsequent cash receipts matched to the specific invoices, sales contracts and shipping documents, the customer account's activity history. If those cannot produce sufficient appropriate evidence, the auditor faces a scope limitation with opinion-level consequences — and should say so early, not at signing.",
              },
              {
                heading: "Exceptions are evidence too",
                body: "A reconciliation difference on a bank reply, a disputed balance, or a debtor's 'we already paid' are not annoyances — they are leads. Each exception is investigated and tied back to the assertions: timing differences, in-transit items, errors, or concealment. Patterns of exceptions (every difference favoring the client by rounding) are fraud indicators under ISA 240.",
              },
              {
                heading: "Confirmation-specific fraud patterns",
                body: "The rogue employee redirecting replies to a P.O. box, the fabricated customer confirming at a colluding accomplice's address, the altered copy in the file — ISA 505's control requirements (direct sending, authenticated channels, verifier of electronic responses) exist precisely because confirmation forgery is a known fraud genre.",
              },
            ],
            keyPoints: [
              "Unreplied positives trigger: subsequent receipts, contracts, shipping documents.",
              "Exceptions get investigated to cause — and patterned exceptions signal fraud risk.",
              "Electronic replies need sender authentication before reliance.",
              "Unresolved evidence gaps escalate into scope limitations with opinion effects.",
            ],
            example: {
              title: "The P.O. box round-trip",
              context: "A receivables clerk 'helpfully' offers to deliver confirmation requests with the monthly statements. Replies arrive quickly, all agreeing.",
              analysis: "Every reply passed through the very person whose schemes confirmations exist to detect. The auditor must restart the cycle with direct dispatch and re-verified addresses — the fast, agreeable replies are worthless, and their very smoothness is a red flag.",
            },
            takeaway: "Design the procedure so the only hands between the counterparty and the auditor are the postman's.",
          },
        },
        {
          title: "Management Refusals and Their Consequences",
          durationMin: 10,
          content: {
            intro: "Management sometimes blocks confirmations ('the bank is slow', 'the customer relationship is sensitive'). ISA 505 has a defined response path.",
            sections: [
              {
                heading: "Inquiry is not acceptance",
                body: "The auditor asks why. A valid reason with alternative evidence that resolves the risk may be acceptable. A refusal on a significant account — the bank where all liquidity sits, the distributor carrying 41% of revenue — is presumptively a red flag: the standard instructs the auditor to treat it as a fraud-risk indicator and reconsider the risk assessment.",
              },
              {
                heading: "The escalation chain",
                body: "Refusal → evaluate reasons and evidence → communicate with TCWG → evaluate the effect on the report. If management blocks the confirmation and alternatives cannot fill the gap, the outcome is a qualified or disclaimed opinion — the refusal converts itself into an evidence limitation the auditor must report, not absorb.",
              },
            ],
            keyPoints: [
              "Refusals on significant balances are fraud-risk indicators to investigate, not accept.",
              "Acceptance requires a valid reason plus alternatives that actually resolve the risk.",
              "Unresolvable refusals escalate to TCWG and into the opinion.",
            ],
            takeaway: "Whoever blocks a confirmation hands the auditor a conclusion — the only question is which one.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "ISA 505 — Knowledge Check",
    questions: [
      {
        question: "Confirmation control requires that:",
        options: ["The auditor selects, prepares, sends, and receives requests directly", "The client forwards requests for efficiency", "Requests go out with the monthly statements", "Replies may be collected by the CFO's assistant"],
        correctIndex: 0,
        explanation: "Client intermediation destroys the evidence's defining feature — independence of the channel.",
      },
      {
        question: "A positive confirmation with no reply after follow-up requires the auditor to:",
        options: ["Perform alternative procedures (subsequent receipts, contracts, shipping docs)", "Remove the receivable", "Ignore the account", "Qualify automatically"],
        correctIndex: 0,
        explanation: "Alternatives come first; only if they fail does a scope limitation arise.",
      },
      {
        question: "Confirmations are strongest for which assertion pair?",
        options: ["Existence and rights/terms", "Valuation and allocation", "Completeness alone", "Presentation"],
        correctIndex: 0,
        explanation: "A confirmed balance exists and its terms are stated — whether it is collectible is an ECL question.",
      },
      {
        question: "A bank reply reveals an undisclosed loan. The misstatement concerns primarily:",
        options: ["Completeness of borrowings", "Occurrence of revenue", "Existence of cash", "Cut-off of purchases"],
        correctIndex: 0,
        explanation: "The classic bank-confirmation catch — the balance the client did not record at all.",
      },
      {
        question: "Management refuses confirmation of the main bank account citing 'relationship sensitivity'. The auditor should:",
        options: ["Treat it as a fraud-risk indicator, document the reasons, and evaluate alternative evidence with TCWG communication", "Accept the explanation and move on", "Drop the bank area from the audit", "Bill the client for the unused procedure"],
        correctIndex: 0,
        explanation: "Refusals on significant balances are presumptive red flags with a defined escalation path.",
      },
      {
        question: "Negative confirmations are appropriate only when:",
        options: ["Risk is low, items are many and homogeneous, and a high non-response rate can be expected", "The balance is large", "Fraud risk is elevated", "The client requests speed"],
        correctIndex: 0,
        explanation: "All three conditions must hold — negative requests are corroborative at best, never primary evidence for significant risks.",
      },
    ],
  },
}

export const SPINE_520_530: SpineCourse = {
  code: "ISA-520C",
  title: "Analytical Procedures & Audit Sampling: ISA 520 / ISA 530",
  subtitle: "The two quantitative engines of substantive testing",
  description:
    "Substantive analytics and sampling are the twin engines of efficient fieldwork. This course builds both skills: expectation-setting under ISA 520 and sample design, deviation analysis, and projection under ISA 530 — with worked Egyptian examples.",
  category: "International Standards",
  level: "Intermediate",
  cpeHours: 3,
  icon: "LineChart",
  accent: "olive",
  featured: false,
  modules: [
    {
      title: "Substantive analytics",
      description: "Expectations, precision, and investigation",
      lessons: [
        {
          title: "Expectations That Actually Detect",
          durationMin: 12,
          content: {
            intro: "An analytical procedure is a prediction with an attitude: the auditor forms an independent expectation, compares it to the books, and demands an explanation of the gap.",
            sections: [
              {
                heading: "Precision drivers",
                body: "Expectations get sharper when data is disaggregated (monthly, by market, by product), when the relationships are stable and predictable (margin structures, capacity times price), and when the underlying information system is reliable. A blended annual gross margin tells you almost nothing; a monthly margin by market — domestic versus export — exposes price manipulation in a quarter.",
              },
              {
                heading: "Non-financial data",
                body: "The strongest analytics triangulate financial and operational data: hotel occupancy times average room rate; garment units shipped times per-unit price; kilowatt-hours per ton of output against cost of production. Non-financial data is harder for management to groom consistently with a financial narrative — which is exactly why it is powerful.",
              },
              {
                heading: "Investigation discipline",
                body: "A difference beyond the threshold requires inquiry AND corroboration. Management's explanation ('a one-off discount to clear stock') is a hypothesis until tested — against sales records, stock movement, later-period margins. The auditor's right to change the expectation exists only in one direction: when the expectation itself was wrong for an auditable reason, documented like any other conclusion.",
              },
            ],
            keyPoints: [
              "Disaggregation (monthly, by market) is the single biggest precision lever.",
              "Non-financial data cross-checks financial narratives from a direction management grooms least.",
              "Explanations are hypotheses — corroborate before closing the difference.",
              "Analytics alone never carry a significant risk.",
            ],
            takeaway: "The value of an analytic is set before the comparison — in the quality of the expectation.",
          },
        },
        {
          title: "Sampling: Design, Deviation, Projection",
          durationMin: 14,
          content: {
            intro: "Sampling lets the auditor conclude about a population from a subset — if the population is complete, the sample is representative, and the results are projected honestly.",
            sections: [
              {
                heading: "Population completeness first",
                body: "A sample from an incomplete population is a verdict on the part management chose to show. Before sampling sales, verify the population reconciles: the sales journal to the ledger to the filed VAT returns. Egypt's VAT returns are a particularly effective completeness anchor for the revenue population.",
              },
              {
                heading: "Statistical vs judgmental",
                body: "Statistical sampling measures sampling risk and supports projection; judgmental (targeted) selection focuses on risky items — period-end, round amounts, related parties — but does not project. Most real programs blend both: a statistical core for representative assurance, targeted additions where risk concentrates.",
              },
              {
                heading: "Deviations and their meaning",
                body: "A deviation is a control failure or a misstatement found in a sample item — its meaning depends on diagnosis: systematic (every December invoice lacks approval) vs random (one clerk's vacation overlap), fraudulent vs erroneous. The response escalates accordingly: extend the sample, abandon control reliance, or invoke ISA 240. Projection for tests of details (projecting misstatement to the population) is separate from extrapolating deviation rates in control testing.",
              },
            ],
            keyPoints: [
              "Test population completeness before trusting any sample from it.",
              "Statistical samples project; judgmental samples target — know which you are doing.",
              "Diagnose deviations (systematic? intentional?) before choosing a response.",
              "Deviations in controls raise control risk and expand substantive scope.",
            ],
            example: {
              title: "The December sample that found the pattern",
              context: "A 25-invoice random sample of export sales shows two missing bills-of-lading — both dated 30-31 December.",
              analysis: "Randomly found, but not random in nature: both deviations sit at the cut-off boundary. The correct move is targeted follow-up on ALL period-end invoices — the sample answered the wrong question by accident; redesign it to ask the right one.",
            },
            takeaway: "Sampling converts risk to numbers — provided the population is whole and deviations are diagnosed, not just counted.",
          },
        },
        {
          title: "Stratification and Monetary-Unit Thinking",
          durationMin: 10,
          content: {
            intro: "Fieldwork efficiency is mostly stratification: big items get individual attention, small homogeneous items get samples.",
            sections: [
              {
                heading: "The top-stratum discipline",
                body: "Items above performance materiality (or a chosen cut-off) are examined 100% — no sampling judgment applies to them. Below the cut-off, stratify by size and risk characteristics: the top stratum sampled at higher coverage, the tail at lower. Monetary-unit sampling ties selection probability to size, which is why value-weighted designs dominate receivables and inventory testing.",
              },
              {
                heading: "Risk-weighted strata",
                body: "Beyond size, strata can carry risk flags: new customers, related parties, credit notes after year-end, manual journal entries. A small stratum of suspicious items may justify 100% examination even though every item is individually immaterial — the pattern, not the size, is the audit question.",
              },
            ],
            keyPoints: [
              "Items above the cut-off get 100% examination — always.",
              "Value-weighted sampling concentrates coverage where the money is.",
              "Risk strata (related parties, period-end, manuals) may warrant full coverage despite small size.",
            ],
            takeaway: "Stratify first, sample second — most 'sampling problems' are really stratification decisions.",
          },
        },
        {
          title: "Worked Example: Revenue Sampling Program",
          durationMin: 11,
          content: {
            intro: "Putting the two engines together: a revenue audit program for a 612m EGP textile exporter, mixing analytics and targeted sampling.",
            sections: [
              {
                heading: "The program",
                body: "Analytics: monthly gross margin by market (domestic vs. Gulf distributor) with volume/price decomposition; export revenue versus container counts and customs data; receivables aging movement. Sampling: 100% examination of all export invoices in the last ten working days of December (cut-off stratum); random 40-invoice sample across the year for pricing recomputation against the quarterly price list; 100% of credit notes issued after 15 December.",
                bullets: [
                  "Analytics set the expectation: margins by market, volume ties to logistics data.",
                  "The cut-off stratum is fully examined — size is not the criterion, timing is.",
                  "Pricing accuracy is sampled against an external benchmark (price list + market indices).",
                ],
              },
              {
                heading: "Reading the results",
                body: "If December margin by market holds but export volume outpaces containers by 9%, the analytics and the sampling disagree — and that disagreement is the finding. The program is designed so the two engines cross-examine the same assertions from different directions.",
              },
            ],
            keyPoints: [
              "Design programs so analytics and sampling cross-examine the same assertion.",
              "Cut-off strata are about timing, not size.",
              "Volume-to-logistics ties catch phantom revenue that price testing misses.",
            ],
            takeaway: "A good program is a conversation between methods — when they agree, assurance is cheap; when they disagree, you have found the audit.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "ISA 520 / 530 — Knowledge Check",
    questions: [
      {
        question: "Expectations from analytics are most precise when:",
        options: ["Data is disaggregated, stable, and from a reliable system", "Data is annual and blended", "Management provides the expectation", "The account is small"],
        correctIndex: 0,
        explanation: "Disaggregation + predictability + reliable data sharpen the expectation the whole procedure depends on.",
      },
      {
        question: "Before sampling from a population, the auditor must establish:",
        options: ["The population's completeness for the audit objective", "The client's approval of the method", "The sample size in advance regardless of risk", "That the population is alphabetized"],
        correctIndex: 0,
        explanation: "A sample from an incomplete population misses exactly the items a fraud would hide.",
      },
      {
        question: "A deviation found in a control test means the auditor should first:",
        options: ["Investigate its nature and cause, then reconsider the risk assessment", "Ignore it if within tolerable rate", "Re-test the same sample", "Immediately qualify the opinion"],
        correctIndex: 0,
        explanation: "Diagnosis before response: systematic vs. isolated and intentional vs. erroneous change what the deviation means.",
      },
      {
        question: "Substantive analytics alone are sufficient when:",
        options: ["Rarely — they can never carry a significant risk alone", "The client is small", "The account is revenue", "The auditor is experienced"],
        correctIndex: 0,
        explanation: "ISA 330 requires tests of details for significant risks — analytics complement, never substitute.",
      },
      {
        question: "Monetary-unit sampling is preferred for receivables because:",
        options: ["Selection probability is proportional to value, concentrating coverage on the money", "It skips evaluation", "It requires no documentation", "It eliminates sampling risk"],
        correctIndex: 0,
        explanation: "Value-weighted designs put audit effort where misstatement weight sits.",
      },
      {
        question: "Analytics show stable margins but export volume exceeds shipping data by 9%. This disagreement means:",
        options: ["The finding is the disagreement — investigate possible phantom revenue", "Discard the analytics", "Adjust the shipping data", "Accept management's explanation without testing"],
        correctIndex: 0,
        explanation: "When two methods disagree, the disagreement IS the lead — corroborate or conclude.",
      },
    ],
  },
}
