import type { SpineCourse } from "./isa-spine-1"

/* ISA 550 / 560 / 580 / 600 / ISQM 1 / IESBA ethics — compact courses. */

export const SPINE_550: SpineCourse = {
  code: "ISA-550C",
  title: "Related Parties (ISA 550): The Channel Nobody Discloses Voluntarily",
  subtitle: "Identifying, testing, and reporting the relationships that distort statements",
  description:
    "Owner-managed businesses run on related parties: family distributors, friendly financiers, management-owned suppliers. ISA 550 makes the auditor map the web, challenge the terms, and hunt the undisclosed — the single most fraud-adjacent area of the risk assessment.",
  category: "International Standards",
  level: "Intermediate",
  cpeHours: 2,
  icon: "Users",
  accent: "plum",
  featured: false,
  modules: [
    {
      title: "The related-party audit",
      description: "Identification, significance, and the fraud link",
      lessons: [
        {
          title: "Mapping the Web Before It Bites",
          durationMin: 12,
          content: {
            intro: "You cannot test relationships you never found. ISA 550's first job is identification — from inquiries, filings, and the pattern-reading of transactions.",
            sections: [
              {
                heading: "The three identification sources",
                body: "Inquiry of management (with the specific questions the standard prescribes), the entity's own records (registers, minutes, conflict declarations), and your analytical pattern-reading: transactions with abnormal terms, out-of-the-normal-course deals, unexplained cash flows, and counterparties that share addresses or directors. Egyptian owner-family structures make this mapping the core of acceptance and planning for mid-cap audits.",
              },
              {
                heading: "Significance and the fraud link",
                body: "One related-party transaction is rarely the risk — the pattern is. ISA 240 makes related-party dominance a fraud risk area: transactions may not have the ordinary discipline of independent counterparties (a 'market price' nobody markets at, receivables nobody collects). The auditor treats significant related-party transactions as significant risks by default, testing the business rationale and the terms.",
              },
            ],
            keyPoints: [
              "Identification precedes everything: inquire with ISA 550's specific questions, read records, and pattern-read transactions.",
              "Abnormal terms and out-of-the-normal-course transactions are the tripwires.",
              "Significant related-party transactions are treated as significant risks (fraud overlay).",
              "Owner-family structures concentrate the risk — map them at acceptance, not at fieldwork.",
            ],
            takeaway: "The related-party file is a map, not a list — draw it before the transactions cross it.",
          },
        },
        {
          title: "Testing Terms, Rationale, and Disclosure",
          durationMin: 12,
          content: {
            intro: "Found the relationships — now audit them: do the terms make market sense, does the rationale hold, and is the disclosure complete?",
            sections: [
              {
                heading: "Arm's-length claims are assertions, not facts",
                body: "When management writes 'transactions were on terms equivalent to arm's length', the auditor must obtain evidence: comparable market terms, third-party quotes, pricing files, sector indices. Accepting the sentence because it is typed is exactly the failure ISA 550 exists to prevent.",
              },
              {
                heading: "The rationale question",
                body: "For every significant transaction ask: what commercial purpose does this serve that a third party would serve worse? 'The founder prefers dealing with family' is an answer about incentives, not economics. A rationale that cannot survive the question is a misstatement risk in the making — and possibly a fraud indicator.",
              },
              {
                heading: "Disclosure completeness — the hardest assertion",
                body: "EAS 20 / IAS 24 require disclosure of relationships, transactions, balances, and commitments. Completeness is tested indirectly: your map versus the notes. Gaps between the two — the distributor you know about that the notes omit — are the finding, and their materiality decides between adjustment, disclosure demands, and reporting consequences.",
              },
            ],
            keyPoints: [
              "Arm's-length statements need comparable evidence, not acceptance.",
              "The commercial-rationale question separates convenience from concealment.",
              "Disclosure completeness = your independently built map vs. the notes.",
              "Undisclosed significant relationships are misstatements with opinion consequences.",
            ],
            example: {
              title: "41% of revenue, one signature",
              context: "All exports flow to a distributor owned by the founder's son at quarterly prices 'set competitively', receivables aging tripling.",
              analysis: "Concentration + control + opaque pricing + stretched receivables = the significant-risk cluster. The response: price benchmarks, distributor financials for collectability, and if the relationship stays undisclosed in the notes, a completeness misstatement on top of the valuation one.",
            },
            takeaway: "Related-party audit = map the web, price the terms, demand the disclosure.",
          },
        },
        {
          title: "Undisclosed Relationships the Auditor Discovers",
          durationMin: 10,
          content: {
            intro: "The scariest sentence in ISA 550: the auditor may identify a related party management did not disclose. What then?",
            sections: [
              {
                heading: "The response sequence",
                body: "Communicate to TCWG, ask why disclosure was omitted, evaluate the integrity implications for the whole audit (if management concealed this, what else?), and re-perform the identification procedures with wider nets. An undisclosed related party is never a standalone disclosure fix — it is a window into management's disclosure philosophy, and the auditor's response must scale accordingly, up to opinion modification for inadequate disclosure.",
              },
            ],
            keyPoints: [
              "A discovered-undisclosed related party triggers: TCWG communication, integrity re-evaluation, wider re-identification.",
              "Concealment reframes every other management representation in the file.",
              "Inadequate related-party disclosure is a misstatement — with ISA 705 consequences.",
            ],
            takeaway: "What management hides tells you more than what it shows — treat concealment as information.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "ISA 550 — Knowledge Check",
    questions: [
      {
        question: "A related-party relationship exists when there is:",
        options: ["Control, joint control, significant influence, or key-management relationships", "Only common auditors", "Any customer over 10% of sales", "Shared office space"],
        correctIndex: 0,
        explanation: "The definition tracks control and influence structures plus key management personnel — not size or coincidence.",
      },
      {
        question: "Significant related-party transactions are treated by the auditor as:",
        options: ["Significant risks with a fraud overlay", "Routine transactions", "Disclosure-only matters", "Tax matters"],
        correctIndex: 0,
        explanation: "ISA 550 + ISA 240: dominance and abnormal terms put related-party dealing at the top of the risk register.",
      },
      {
        question: "Management's arm's-length assertion requires the auditor to:",
        options: ["Obtain comparable evidence (market terms, quotes, indices) before accepting", "Accept it as management's own words", "Delete it from the draft", "Qualify immediately in all cases"],
        correctIndex: 0,
        explanation: "Assertions of fact need evidence — comparables are the test.",
      },
      {
        question: "The auditor discovers an undisclosed major distributor owned by the CEO's brother. First response:",
        options: ["Communicate with TCWG and re-evaluate the integrity implications for the whole audit", "Adjust the disclosure silently", "Do nothing — management's choice", "Withdraw immediately"],
        correctIndex: 0,
        explanation: "Concealment re-opens the risk assessment and the reliability of all other representations.",
      },
      {
        question: "Related-party disclosure completeness is best tested by:",
        options: ["Comparing the auditor's independently built relationship map to the notes", "Asking the CFO if everything is disclosed", "Reading the notes for the word 'related'", "Confirming balances with banks"],
        correctIndex: 0,
        explanation: "Your map is the independent benchmark; the notes are the claim under test.",
      },
      {
        question: "A significant transaction with no identifiable business rationale suggests:",
        options: ["Possible concealment or misrepresented terms — a fraud indicator to pursue", "Efficient family dealing", "A tax opportunity", "A disclosure improvement"],
        correctIndex: 0,
        explanation: "The rationale question is the cheapest fraud screen in the standard.",
      },
    ],
  },
}

export const SPINE_560: SpineCourse = {
  code: "ISA-560C",
  title: "Subsequent Events (ISA 560): Auditing After the Year Ends",
  subtitle: "The period between balance sheet and report — where conditions become facts",
  description:
    "Year-end is a line in the ledger; the audit lives in the weeks after it. ISA 560 governs the auditor's responsibility for events between the balance sheet date and the report date: adjusting events, disclosing events, and the after-issuance regime nobody expects to need.",
  category: "International Standards",
  level: "Foundation",
  cpeHours: 2,
  icon: "CalendarDays",
  accent: "sand",
  featured: false,
  modules: [
    {
      title: "Events and the audit",
      description: "The two-period model and the procedures",
      lessons: [
        {
          title: "Adjusting vs Non-Adjusting: The Conditions Test",
          durationMin: 11,
          content: {
            intro: "One question sorts every subsequent event: did the condition exist at the balance sheet date?",
            sections: [
              {
                heading: "Adjusting events",
                body: "Conditions existing at year-end that the auditor learns about later: the customer whose insolvency followed sustained distress (the receivable was already uncollectible), the court ruling on a dispute rooted in the audited year, the discovery of fraud that ran through the year. These adjust the statements — the year-end numbers were wrong, and the correction belongs to the audited period.",
              },
              {
                heading: "Non-adjusting events",
                body: "Conditions arising after year-end: a fire in the January warehouse, a February acquisition, a post-year-end rate collapse. Year-end balances were right; the events merely matter. Material ones get disclosed (nature and estimated financial effect) so users are not blindsided.",
                bullets: [
                  "Insolvency after chronic distress → adjust (condition existed).",
                  "Fire after year-end on new inventory → disclose (condition arose after).",
                  "The date of KNOWLEDGE never changes the classification — only the condition's existence does.",
                ],
              },
            ],
            keyPoints: [
              "The conditions-existence test sorts adjusting from non-adjusting — not the event's date or size.",
              "Adjusting events change year-end numbers; material non-adjusting events are disclosed.",
              "Knowledge date is irrelevant to classification; condition existence is everything.",
              "Post-year-end evidence is simultaneously a going-concern input (ISA 570).",
            ],
            takeaway: "Ask 'when did the condition arise' — the answer files the event for you.",
          },
        },
        {
          title: "Procedures to the Report Date",
          durationMin: 10,
          content: {
            intro: "ISA 560 prescribes a procedure set the auditor runs as fieldwork closes — active detection, not passive waiting for news.",
            sections: [
              {
                heading: "The standard battery",
                body: "Read the latest interim accounts and minutes of shareholder/board/audit-committee meetings after year-end; inquire of management and legal counsel about litigation, claims, and assessments; inspect the entity's post-year-end cash book for unusual movements. The dual-dating trap is procedural: the auditor's procedures must reach the report date, so run them as late as the timetable allows.",
              },
              {
                heading: "The after-issuance regime",
                body: "Facts discovered after issuance split into two: facts that existed at the report date (the auditor must act — assess, possibly amend the report) versus facts arising after (management's statement, the auditor's limited role). The regime's existence is why files and email trails matter: proving WHEN the auditor knew what is a litigation shield.",
              },
            ],
            keyPoints: [
              "Read post-year-end minutes and interims; inquire on litigation; inspect the cash book.",
              "Procedures must extend to the report date — run them late, not early.",
              "After issuance: facts existing at the report date reactivate the auditor's duty.",
              "Document the knowledge timeline — it is the defense.",
            ],
            takeaway: "Subsequent-events work is the audit's rearguard — disciplined, late, and documented.",
          },
        },
        {
          title: "Worked Cases: Egyptian Year-Ends",
          durationMin: 10,
          content: {
            intro: "Three February events, three different answers — the drill exam writers love.",
            sections: [
              {
                heading: "The cases",
                body: "Case 1: a Gulf distributor bankrupt in February after six months of stalled payments — adjust the year-end receivable; the credit condition was already there. Case 2: a March 2027 fire destroys raw cotton in transit purchased in January — disclose; the condition arose after year-end. Case 3: the syndicate's reservation-of-rights letter arrives 20 February on a Q3 covenant breach — going-concern evidence under ISA 570 to be folded into the assessment, plus disclosure of the covenant position.",
              },
            ],
            keyPoints: [
              "Bankruptcy after chronic stall = adjusting (condition existed).",
              "Post-year-end fire = disclosing (new condition).",
              "Bank reservation letters = going-concern evidence, not just disclosure text.",
            ],
            takeaway: "Same month, three treatments — the conditions test decides, always.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "ISA 560 — Knowledge Check",
    questions: [
      {
        question: "A customer goes bankrupt in February after visible distress since October. Year-end receivable treatment:",
        options: ["Adjust — the credit-loss condition existed at year-end", "Disclose only — bankruptcy is a new-year event", "Ignore — the customer may reorganize", "Wait for the court ruling"],
        correctIndex: 0,
        explanation: "The condition (impaired credit) predates year-end; the February filing is just the news arriving.",
      },
      {
        question: "The auditor's active subsequent-events procedures must extend to:",
        options: ["The date of the auditor's report", "The balance sheet date", "The AGM date", "The tax filing deadline"],
        correctIndex: 0,
        explanation: "The report date defines the period the auditor must cover — the procedures run as late as possible.",
      },
      {
        question: "Which procedure belongs to the ISA 560 battery?",
        options: ["Reading post-year-end minutes and interim accounts", "Confirming year-end cash", "Recounting December inventory", "Testing the December price list"],
        correctIndex: 0,
        explanation: "Minutes, interims, litigation inquiry, and the cash book are the standard subsequent-events sweep.",
      },
      {
        question: "A fire destroys January-purchased inventory in February. Treatment:",
        options: ["Disclose if material — the condition arose after year-end", "Adjust year-end inventory", "Restate the prior year", "No action"],
        correctIndex: 0,
        explanation: "New condition, after year-end: disclosure of nature and effect, not adjustment.",
      },
      {
        question: "After issuance, the auditor learns of a misstatement whose facts existed at the report date. The auditor:",
        options: ["Must assess and potentially support amendment of the report", "Does nothing — the report is final", "Fixes it in next year's file", "Sues management"],
        correctIndex: 0,
        explanation: "Facts existing at the report date reactivate the auditor's duty — the after-issuance regime exists for exactly this.",
      },
      {
        question: "A bank's reservation-of-rights letter on a Q3 breach arrives after year-end. It is primarily:",
        options: ["Going-concern evidence to fold into the ISA 570 assessment", "A non-adjusting disclosure item only", "Evidence of fraud", "Proof the FS are wrong"],
        correctIndex: 0,
        explanation: "Covenant-adjacent letters stress the mitigation plan — ISA 570's evaluation consumes them, and disclosure follows the conclusion.",
      },
    ],
  },
}

export const SPINE_580: SpineCourse = {
  code: "ISA-580C",
  title: "Written Representations (ISA 580): The Evidence That Anchors the File",
  subtitle: "What they are, what they prove, and what happens when they are refused",
  description:
    "Every audit closes with a letter. ISA 580 defines which representations are mandatory, how they are dated and signed, and the surprisingly hard consequences when management will not sign — a compact but exam-critical standard.",
  category: "International Standards",
  level: "Foundation",
  cpeHours: 1,
  icon: "PenLine",
  accent: "clay",
  featured: false,
  modules: [
    {
      title: "The representation letter",
      description: "Form, timing, content, refusal",
      lessons: [
        {
          title: "What Representations Are — and Are Not",
          durationMin: 10,
          content: {
            intro: "A written representation is management's signed statement of facts and intentions the audit needs but cannot fully verify from documents: responsibilities, completeness, intentions.",
            sections: [
              {
                heading: "Mandatory content",
                body: "The general representations — management's responsibility for the FS and for the completeness of information and transactions provided — plus specific representations covering significant judgments: fraud awareness, related parties (ISA 550), going-concern plans and assessment (ISA 570), subsequent events (ISA 560), uncorrected misstatements, and estimates' intentions (ISA 540). The letter is dated the same day as the report or as near as possible and signed by those with responsibility and knowledge — CEO and CFO at minimum.",
              },
              {
                heading: "Evidence, not absolution",
                body: "Representations are necessary but weak evidence on their own — they corroborate, frame, and take responsibility. They never substitute for procedures. A file built on representations where documents were obtainable is an unprofessional file with good manners.",
              },
            ],
            keyPoints: [
              "The letter is mandatory evidence — refusal is a scope limitation.",
              "Date it at (or near) the report date; sign it by CEO/CFO-level responsibility.",
              "Tailor specific representations to the audit's actual judgments.",
              "Representations corroborate — they never replace procedures.",
            ],
            takeaway: "The letter is the signature under the file's integrity — necessary, dated, signed, and never a substitute.",
          },
        },
        {
          title: "Refusals, Contradictions, Consequences",
          durationMin: 10,
          content: {
            intro: "Two failure modes end audits badly: the unsigned letter and the representation that contradicts the evidence.",
            sections: [
              {
                heading: "The refusal ladder",
                body: "Management declines to sign. The auditor discusses, documents the request, and if the refusal stands: communicate with TCWG, evaluate the impact on the reliability of other evidence, and modify the opinion — qualified or disclaimed per pervasiveness — or withdraw where law permits. The standard is explicit: there is no audit without the letter.",
              },
              {
                heading: "The contradiction case",
                body: "A representation that materially contradicts other audit evidence undermines the entire evidence base: if management asserts completeness while documents show concealment, every other representation inherits the doubt. The auditor investigates, re-evaluates the reliability of management's statements across the file, and considers the fraud implications under ISA 240.",
              },
            ],
            keyPoints: [
              "Refusal → TCWG communication → opinion modification or withdrawal.",
              "Contradiction → investigate and re-evaluate ALL management evidence, with ISA 240 in mind.",
              "Doubt about the letter's reliability is doubt about the audit itself.",
            ],
            takeaway: "How management signs (or doesn't) is itself audit evidence about everything else.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "ISA 580 — Knowledge Check",
    questions: [
      {
        question: "If management refuses to provide requested written representations, the auditor should:",
        options: ["Modify the opinion (qualified/disclaimer) or withdraw where possible", "Continue and rely on oral confirmations", "Complete the audit without the letter", "Have the audit committee sign instead"],
        correctIndex: 0,
        explanation: "The letter is mandatory evidence — refusal is a scope limitation with defined escalation.",
      },
      {
        question: "The representation letter should be dated:",
        options: ["As of the auditor's report date (or as near as possible)", "At fieldwork start", "On the balance sheet date", "By the client's lawyer"],
        correctIndex: 0,
        explanation: "The date ties the representations to the full audit period including events to the report date.",
      },
      {
        question: "Which is a mandatory general representation?",
        options: ["Management's responsibility for the FS and completeness of information provided", "A guarantee of future profits", "The auditor's fee agreement", "The tax return's accuracy"],
        correctIndex: 0,
        explanation: "The responsibility/completeness core is non-negotiable; specifics layer on per standard.",
      },
      {
        question: "Written representations are:",
        options: ["Necessary but insufficient alone — they corroborate other evidence", "The strongest evidence in the file", "Optional for small clients", "A substitute when documents are lost"],
        correctIndex: 0,
        explanation: "Necessary but weak alone — corroboration is their role, never substitution.",
      },
      {
        question: "A representation materially contradicts other audit evidence. The auditor should:",
        options: ["Investigate and re-evaluate the reliability of ALL management representations", "Prefer the written representation", "Delete the contradictory evidence", "Ignore the contradiction if immaterial to profit"],
        correctIndex: 0,
        explanation: "Contradiction infects the whole representation base — re-evaluation is mandatory.",
      },
      {
        question: "Who signs the representation letter?",
        options: ["Those with responsibility for and knowledge of the matters — CEO/CFO level", "The audit junior", "The client's bank", "The predecessor auditor"],
        correctIndex: 0,
        explanation: "Signatures carry responsibility — knowledge and authority must both be present.",
      },
    ],
  },
}

export const SPINE_600: SpineCourse = {
  code: "ISA-600C",
  title: "Group Audits (ISA 600): Auditing the Consolidated Whole",
  subtitle: "Component strategies, consolidation risk, and the partner's one opinion",
  description:
    "One opinion, many boxes. ISA 600 governs audits of group financial statements: component classification, the group team's procedures, consolidation testing, and the division of work with component auditors — with Egyptian group-structure realities throughout.",
  category: "International Standards",
  level: "Advanced",
  cpeHours: 3,
  icon: "Network",
  accent: "terracotta",
  featured: false,
  modules: [
    {
      title: "The group framework",
      description: "Strategy, components, consolidation",
      lessons: [
        {
          title: "One Opinion, Shared Work, Undivided Responsibility",
          durationMin: 13,
          content: {
            intro: "The group engagement partner signs one opinion covering the consolidated whole — every component, every currency, every elimination.",
            sections: [
              {
                heading: "The component strategy",
                body: "Significant components — individually material ones and those with significant risks by nature — get full audit attention (their own audit or specified procedures). Non-significant components get analytical procedures at group level. The strategy is risk arithmetic: where does the consolidated number's risk actually live?",
              },
              {
                heading: "Working with component auditors",
                body: "The group team decides how much involvement each component needs: direction through instructions, review of their risk work, access to their files, or performing procedures itself. Where another firm audits a component, the group team evaluates that firm's competence and compliance with the group instructions — the work is used, but the opinion's ownership never transfers.",
              },
              {
                heading: "Egyptian group realities",
                body: "Family groups with a holding S.A.E., operating subsidiaries, and Gulf trading entities; components with different fiscal calendars requiring adjustment to the group's reporting date; and the classic consolidation trap — intercompany balances confirmed at different amounts by two subsidiaries, waiting for the eliminations to hide the difference.",
              },
            ],
            keyPoints: [
              "The group opinion is indivisible — component work is a means, never a delegation of responsibility.",
              "Significant components: individual materiality or significant-risk nature.",
              "Component auditor work is used after direction, review, and compliance evaluation.",
              "Uniform reporting dates and policies drive the consolidation adjustments the group team tests.",
            ],
            takeaway: "Group audit is an architecture of trust with verification — every layer exists to make one signature honest.",
          },
        },
        {
          title: "Consolidation Procedures: Where Groups Break",
          durationMin: 12,
          content: {
            intro: "The consolidation itself is an accounting process — and the group team audits it like one.",
            sections: [
              {
                heading: "The eliminations battery",
                body: "Check intra-group balances reconcile between counterparties (the mismatch is the finding), test elimination entries against the underlying transactions, verify uniform accounting policies with adjustment entries where component policies differ, and test the translation of foreign operations — functional currency judgments, rate selection, and the equity treatment of translation differences.",
              },
              {
                heading: "The component-number handshake",
                body: "Component FS feeding the consolidation must be the same numbers the component auditors reported on — or roll forward on defined procedures where reporting dates differ. The reconciliation between 'what the component filed' and 'what the group consolidated' is a standing audit area with its own schedule.",
              },
            ],
            keyPoints: [
              "Intercompany mismatches are findings, not paperwork.",
              "Uniform policy adjustments and translation testing are core consolidation procedures.",
              "Component-to-consolidation reconciliation is a mandatory handshake.",
            ],
            takeaway: "Consolidation testing is where group audits earn their fee — the whole is only as true as its eliminations.",
          },
        },
        {
          title: "Component Materiality and the Sum-of-Parts Trap",
          durationMin: 11,
          content: {
            intro: "Component materialities are set below group materiality — the sum of uncorrected component misstatements must not blow the consolidated threshold.",
            sections: [
              {
                heading: "The arithmetic of aggregation",
                body: "Each significant component gets its own materiality (performance materiality included) calibrated to the group's; non-significant components share a group-level buffer. The aggregation risk — small misstatements in many components summing past group materiality — is why component buffers stay conservative and why the group team aggregates uncorrected misstatements across all components before concluding.",
              },
            ],
            keyPoints: [
              "Component materiality < group materiality — aggregation headroom is the reason.",
              "Aggregate uncorrected misstatements across components before concluding.",
              "Unallocated performance materiality covers the non-significant tail.",
            ],
            takeaway: "Group materiality is a budget — component materialities are the spending limits that keep it solvent.",
          },
        },
        {
          title: "Workshop: The Gulf Subsidiary Problem",
          durationMin: 12,
          content: {
            intro: "A Cairo group consolidates a Sharjah distributor subsidiary. The group team's file has questions to answer.",
            sections: [
              {
                heading: "The scenario",
                body: "The subsidiary carries 41% of group revenue; its local auditor issued an unmodified report on a different accounting policy (revenue at shipment vs. the group's control-transfer policy) and a fiscal year closing two months after the group's. The elimination of intercompany sales shows a 4m EGP mismatch between the two sets of books.",
                bullets: [
                  "Significant component by size and by relationship concentration → full audit-level work.",
                  "Policy difference requires adjustment before consolidation — or the consolidation misstates.",
                  "Reporting-date gap needs defined roll-forward procedures on the subsidiary.",
                  "The 4m mismatch is a reconciliation finding to resolve before eliminations, not inside them.",
                ],
              },
            ],
            keyPoints: [
              "Classify the component, fix the policies, close the reporting-date gap, reconcile the balances — in that order.",
              "An elimination that 'clears' a mismatch is a concealment, not a consolidation.",
            ],
            takeaway: "Group judgment = component strategy + consolidation hygiene; both are visible in how mismatches are treated.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "ISA 600 — Knowledge Check",
    questions: [
      {
        question: "Responsibility for the group opinion rests with:",
        options: ["The group engagement partner — undivided, always", "Each component auditor pro rata", "The component with the largest revenue", "The group's CFO"],
        correctIndex: 0,
        explanation: "Component work is a means to the group opinion; ownership never splits.",
      },
      {
        question: "A 'significant component' is one that is:",
        options: ["Individually financially significant OR has significant risks by nature", "Always foreign", "Always the parent", "Audited by the same firm"],
        correctIndex: 0,
        explanation: "The two-prong test catches both the big and the dangerous.",
      },
      {
        question: "Intercompany balances mismatch by 4m between two subsidiaries. The group team should:",
        options: ["Resolve the mismatch before testing eliminations", "Eliminate at the larger amount", "Eliminate at the smaller amount", "Leave the mismatch in consolidated revenue"],
        correctIndex: 0,
        explanation: "An elimination that absorbs a mismatch hides a finding — reconcile first.",
      },
      {
        question: "Component materiality is set below group materiality because:",
        options: ["Uncorrected misstatements can aggregate across components", "Components are less trustworthy", "IFRS requires exactly 50%", "The fee is smaller"],
        correctIndex: 0,
        explanation: "Aggregation headroom — many small misstatements must not sum past the consolidated threshold.",
      },
      {
        question: "A component's fiscal year closes two months after the group's. The group team must:",
        options: ["Perform or obtain defined procedures covering the gap", "Ignore the component", "Change the component's year-end", "Exclude its results"],
        correctIndex: 0,
        explanation: "Uniform reporting dates are achieved through roll-forward procedures, not wishful consolidation.",
      },
      {
        question: "Before using a component auditor's work, the group team evaluates:",
        options: ["The component auditor's competence, ethics, and compliance with group instructions", "The component auditor's fee", "The local weather", "The component's marketing plan"],
        correctIndex: 0,
        explanation: "Direction, review, and evaluation make another firm's work usable within one opinion's responsibility.",
      },
    ],
  },
}

export const SPINE_ISQM: SpineCourse = {
  code: "ISQM-01C",
  title: "Quality Management (ISQM 1): The Firm Behind the Signature",
  subtitle: "The 2022 regime that rewired how audit firms manage quality",
  description:
    "ISQM 1 replaced checklists with a risk-based system: quality objectives, quality risks, responses, monitoring, remediation. This course maps the eight components onto the daily reality of an Egyptian audit firm — from acceptance files to cold reviews.",
  category: "International Standards",
  level: "Intermediate",
  cpeHours: 2,
  icon: "ShieldCheck",
  accent: "olive",
  featured: false,
  modules: [
    {
      title: "The quality system",
      description: "Components, risks, monitoring",
      lessons: [
        {
          title: "From Quality Control to Quality Management",
          durationMin: 12,
          content: {
            intro: "The 2022 revision changed the question from 'does the firm have these policies?' to 'can the firm show its system actually addresses its risks?'",
            sections: [
              {
                heading: "The risk-based spine",
                body: "The firm sets quality objectives, identifies the quality risks that threaten them, designs responses, and then — the new part — monitors whether the responses actually work and remediates when they don't. The eight components are the domains where this cycle operates: governance and leadership; the firm's risk assessment process; relevant ethical requirements; acceptance and continuance; engagement performance; resources; information and communication; and the monitoring and remediation process.",
              },
              {
                heading: "Leadership cannot delegate accountability",
                body: "ISQM 1 makes the firm's chief executive and leadership group ultimately accountable for the system — titles like 'head of quality' manage components; they never own the accountability. In small Egyptian firms this lands literally: the founding partner is the system's accountable officer, whatever the org chart says.",
              },
            ],
            keyPoints: [
              "ISQM 1 is a proactive, risk-based cycle: objectives → risks → responses → monitoring → remediation.",
              "Eight components cover governance through monitoring.",
              "Leadership bears ultimate, non-delegable accountability.",
              "The firm's scale shapes the system — proportionality is built in.",
            ],
            takeaway: "Quality stopped being a manual on a shelf and became a system with feedback loops.",
          },
        },
        {
          title: "Acceptance, Resources, and Engagement Performance",
          durationMin: 12,
          content: {
            intro: "Three components do the daily work: who the firm audits, what it audits them with, and how the audits run.",
            sections: [
              {
                heading: "Acceptance and continuance",
                body: "The acceptance file is the system's gate: integrity of principals, competence to serve, capacity to deliver, and independence across the portfolio. Continuance re-asks the question annually — the fee cut after a qualification, the client who shopped three firms in five years, the owner who resists disclosure: the file answers whether these are risks the system has responses for.",
              },
              {
                heading: "Resources and performance",
                body: "People, time, and tools matched to engagements: staffing plans with competence evidence, realistic time budgets (the 35% fee cut that starves fieldwork hours is a quality risk, not a pricing decision), and engagement-level direction/supervision/review under ISA 220, with the hot review for listed-entity audits. The monitoring component then samples completed files (cold reviews) and feeds findings into remediation — the loop closes.",
              },
            ],
            keyPoints: [
              "Acceptance evaluates integrity, competence, capacity, independence — documented, annually revisited.",
              "Fee-starved budgets are quality risks with names on them.",
              "Direction-supervision-review is the engagement-level quality engine.",
              "Cold reviews feed the monitoring loop that drives remediation.",
            ],
            takeaway: "The system is only as strong as its gate (acceptance) and its loop (monitoring → remediation).",
          },
        },
        {
          title: "The Egyptian Firm's Map",
          durationMin: 10,
          content: {
            intro: "How an Egyptian practice maps ISQM 1 onto the local frame — where the standards, the law, and the market meet.",
            sections: [
              {
                heading: "Local anchors",
                body: "The ESAs import the ISAs' substance; Law 133/1951's register disciplines who may sign; FRA's rules discipline which auditors may audit listed entities; and the profession's ethics follow the IESBA code. The firm's ISQM 1 system therefore bakes in Egyptian specifics: FRA-eligibility checks at acceptance, ESAA training documentation as competence evidence, and CBE-related instructions for bank-audit teams where applicable.",
              },
            ],
            keyPoints: [
              "Map ISQM 1 components to ESA obligations, profession-law requirements, and FRA eligibility.",
              "Competence evidence includes structured ESA training and ESAA involvement.",
              "Bank-audit teams carry CBE-instruction competence requirements.",
            ],
            takeaway: "Quality management is not imported — it is localized; the Egyptian firm's system shows its context.",
          },
        },
        {
          title: "Workshop: Auditing Your Own System",
          durationMin: 10,
          content: {
            intro: "A self-assessment drill: walk one engagement through the system's checkpoints as if you were the cold reviewer.",
            sections: [
              {
                heading: "The cold-review walk",
                body: "Take last year's most difficult file. Check the acceptance memo (did it flag the integrity signals the fieldwork later confirmed?), the staffing plan (did the budgeted hours match the risk assessment's demands?), the direction evidence (does the file show the team was briefed on the risks?), the review trail (were significant judgments reviewed before the report date?), and the monitoring findings (did the cold review of this file land, and what changed?). Each gap you find is a quality risk the system has not yet answered — which is precisely the exercise ISQM 1's risk assessment expects the firm to run.",
              },
            ],
            keyPoints: [
              "Walk one real file through all eight components — the gaps ARE the risk register.",
              "Monitoring findings without remediation are paperwork, not a system.",
            ],
            takeaway: "The best quality review is the one the firm runs on itself before anyone else does.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "ISQM 1 — Knowledge Check",
    questions: [
      {
        question: "ISQM 1's system is best described as:",
        options: ["A risk-based cycle: objectives → risks → responses → monitoring → remediation", "A checklist of annual policies", "A software product", "An annual client survey"],
        correctIndex: 0,
        explanation: "The 2022 regime is proactive and risk-based with a closing feedback loop.",
      },
      {
        question: "Ultimate accountability for the quality system rests with:",
        options: ["The firm's leadership — it cannot be delegated", "The IT department", "The external quality reviewer", "Whoever holds the quality manual"],
        correctIndex: 0,
        explanation: "ISQM 1 pins accountability on leadership; management roles manage components, never the accountability.",
      },
      {
        question: "A 35% fee cut on a qualified-opinion client is, under ISQM 1, primarily:",
        options: ["A quality risk — the fee must permit ISA-compliant resourcing", "A commercial matter with no quality dimension", "A reason to reduce scope", "A marketing opportunity"],
        correctIndex: 0,
        explanation: "Resource-starved engagements are quality risks the system must identify and respond to.",
      },
      {
        question: "The hot review (EQCR) is required for:",
        options: ["Listed-entity audits and other significant-risk engagements", "Every audit", "Only first-year audits", "Only foreign clients"],
        correctIndex: 0,
        explanation: "The EQCR targets listed entities plus engagements the firm judges significantly risky.",
      },
      {
        question: "Cold reviews of completed files belong to which component?",
        options: ["Monitoring and remediation", "Acceptance", "Resources", "Governance"],
        correctIndex: 0,
        explanation: "Periodic file inspections are the monitoring component's engine; findings drive remediation.",
      },
      {
        question: "For Egyptian firms, ISQM 1 implementation should anchor to:",
        options: ["The ESAs, the profession law, FRA eligibility rules, and IESBA ethics", "Only IFRS texts", "Foreign firms' manuals, verbatim", "The tax law exclusively"],
        correctIndex: 0,
        explanation: "The system localizes: ESA obligations, Law 133/1951, FRA rules, and IESBA-based ethics form the Egyptian frame.",
      },
    ],
  },
}

export const SPINE_ETHICS: SpineCourse = {
  code: "ETH-CODE",
  title: "The IESBA Code of Ethics: Judgment Under Pressure",
  subtitle: "Threats, safeguards, independence, and NOCLAR — the auditor's operating system",
  description:
    "Ethics is not a chapter at the end of the audit — it is the operating system the whole engagement runs on. This course builds fluency in the Code's conceptual framework: the five threats, the safeguards logic, independence rules for audit clients, fees, and the NOCLAR framework for suspected non-compliance.",
  category: "International Standards",
  level: "Foundation",
  cpeHours: 3,
  icon: "Scale",
  accent: "plum",
  featured: true,
  modules: [
    {
      title: "The conceptual framework",
      description: "Principles, threats, safeguards",
      lessons: [
        {
          title: "Five Principles, Five Threats, One Method",
          durationMin: 12,
          content: {
            intro: "The Code gives you five principles to protect and five threats that endanger them — and one method for every dilemma: identify, evaluate, respond, document.",
            sections: [
              {
                heading: "The method",
                body: "Identify the threat (self-interest, self-review, advocacy, familiarity, intimidation), evaluate its significance in context, then either apply safeguards that eliminate or reduce it to acceptable levels — or eliminate the underlying interest or relationship entirely. Where no safeguard can work, the interest goes. Documentation is the method's proof: an ethics judgment that lives only in the partner's head does not exist.",
              },
              {
                heading: "The principles in combat",
                body: "Integrity forbids association with misleading information; objectivity forbids letting bias or influence bend judgment; competence and due care demand standards-level work and knowing your limits; confidentiality disciplines information use (with NOCLAR's legal carve-outs); professional behaviour bans conduct that brings the profession into disrepute. Every ethics scenario in an exam — and every one in practice — is some combination of these under some threat.",
              },
            ],
            keyPoints: [
              "The framework: identify threat → evaluate → safeguard or eliminate → document.",
              "Five threats: self-interest, self-review, advocacy, familiarity, intimidation.",
              "Five principles: integrity, objectivity, competence & due care, confidentiality, professional behaviour.",
              "Where no safeguard suffices, the interest or relationship must go.",
            ],
            takeaway: "The Code is a decision procedure, not a list of prohibitions — run the procedure and most dilemmas dissolve.",
          },
        },
        {
          title: "Independence for Audit Clients",
          durationMin: 13,
          content: {
            intro: "Independence is the audit's license to exist — in mind and in appearance, tested by what an informed third party would conclude.",
            sections: [
              {
                heading: "The prohibited list",
                body: "For audit clients some interests are never safeguardable: a financial interest in the client held by the firm or a team member, loans to and from the client (beyond normal immaterial terms), gifts and hospitality beyond trivial values. The response to a prohibited interest is removal, full stop — safeguards do not apply where the Code says they cannot.",
              },
              {
                heading: "Rotation and cooling off",
                body: "Key audit partners rotate off listed-entity audits after seven years and cool off for two before returning to the same role; the long-association threat also drives safeguards like second-partner review for non-listed clients where tenure stretches. Family employment is evaluated by role: a spouse on the client's closing team is a different animal from a cousin in logistics.",
              },
              {
                heading: "Services and fees",
                body: "Non-audit services to audit clients are permissible only when threats are at an acceptable level: management-responsibility services are never OK, preparing the accounting records the auditor audits is presumptively prohibited (with the Code's defined exceptions), and the 15% fee-concentration rule (listed clients, two consecutive years) guards economic dependence. Contingent fees for audits are prohibited outright — the opinion is not a commissionable outcome.",
              },
            ],
            keyPoints: [
              "Some interests are prohibited outright — safeguards are not a menu.",
              "Rotation: 7 years on, 2 off for key partners on listed audits.",
              "Fees: no contingency, 15% concentration discipline, adequacy-to-perform evaluation on low-balls.",
              "Independence in appearance is judged by the informed observer, not the firm's self-image.",
            ],
            takeaway: "Independence rules read as a list but apply as a system — the question is always what an informed third party would conclude.",
          },
        },
        {
          title: "NOCLAR: When Clients Break Laws",
          durationMin: 12,
          content: {
            intro: "The auditor becomes aware of suspected bribery, money laundering, or regulatory breach. NOCLAR gives the escalation path that confidentiality used to block.",
            sections: [
              {
                heading: "The ladder",
                body: "Understand the act and its context (ISA 250 and NOCLAR overlap deliberately). Discuss with management and TCWG where the entity's own framework should handle it. If the entity fails to respond — or the matter involves management itself — the accountant considers legal advice, statutory reporting duties, and ultimately disclosure to an appropriate authority where the public interest justifies it and law protects the disclosure. The Code's contribution: it explicitly states that confidentiality yields to these routes — the silence defense is gone.",
              },
              {
                heading: "The Egyptian overlay",
                body: "Egyptian practice adds statutory layers: AML reporting channels for regulated transactions, FRA rules for supervised entities, and the profession's own discipline. The auditor's NOCLAR analysis in Egypt therefore runs two tracks at once — the Code's ladder and the local law's duties — and documents both.",
              },
            ],
            keyPoints: [
              "NOCLAR's ladder: understand → internal escalation → legal advice → authority disclosure where justified.",
              "Confidentiality yields to legally protected disclosure routes — by design.",
              "The Egyptian overlay: AML channels, FRA duties, profession discipline — documented in parallel.",
              "Withdrawal is a remedy for the relationship, not a substitute for the reporting analysis.",
            ],
            takeaway: "NOCLAR converted the auditor's hardest conflict into a procedure — follow it and document it.",
          },
        },
        {
          title: "Fees, Marketing, and the Small-Firm Reality",
          durationMin: 10,
          content: {
            intro: "Most ethics failures in small firms are not dramatic — they are slow erosions of the fee-and-relationship kind.",
            sections: [
              {
                heading: "The erosion patterns",
                body: "The fee that shrinks while the scope doesn't; the overdue fees that make the firm a creditor of its client; the tax practice that markets 'audit-safe' structuring; the partner who cannot afford to lose the client and everyone knows it. Each is a self-interest threat the framework can name — which is the first step to managing it: evaluate the dependence, apply safeguards (second-partner review, payment plans, portfolio diversification targets), and accept that some client relationships are, ethically, unaffordable.",
              },
            ],
            keyPoints: [
              "Fee erosion, overdue balances, and client dependence are named self-interest threats.",
              "Safeguards exist (reviews, plans, diversification) — but the underlying interest may have to go.",
              "Marketing must never signal opinion shopping.",
            ],
            takeaway: "The ethics of small firms is mostly the ethics of dependence — name it, measure it, manage it.",
          },
        },
        {
          title: "Workshop: Six Judgment Calls",
          durationMin: 12,
          content: {
            intro: "Six scenarios, thirty seconds each to name the threat — then the method does the rest.",
            sections: [
              {
                heading: "The run",
                body: "Scenario 1: the audit senior's mother is the client's HR director (familiarity — evaluate the role). Scenario 2: the firm also designs the client's internal controls (self-review — evaluate against the prohibited-services boundary). Scenario 3: the CEO threatens to dismiss the firm over an adjustment (intimidation — document, escalate, hold). Scenario 4: the firm holds the client's shares in a pension fund (self-interest — prohibited, divest). Scenario 5: the CFO asks the firm to defend the company in a tax dispute (advocacy — incompatible with the audit). Scenario 6: the team's expert bills the client directly for the valuation work he did for the audit (self-interest — restructure the engagement). Six threats, one method, every time.",
              },
            ],
            keyPoints: [
              "Name the threat in seconds — the method handles the rest.",
              "Advocacy and audit are incompatible by default.",
              "Direct billing relationships between your experts and your audit client need restructuring.",
            ],
            takeaway: "Ethical fluency is pattern recognition plus a procedure — drill both.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "Ethics Code — Knowledge Check",
    questions: [
      {
        question: "The five fundamental principles include:",
        options: ["Integrity, objectivity, professional competence and due care, confidentiality, professional behaviour", "Independence, rotation, fees, quality, monitoring", "Planning, evidence, reporting, review, archiving", "Speed, cost, loyalty, silence, growth"],
        correctIndex: 0,
        explanation: "The five principles are the Code's constitution — every threat analysis protects them.",
      },
      {
        question: "The conceptual framework's sequence is:",
        options: ["Identify threats → evaluate → safeguard or eliminate → document", "Read the rule → apply the rule", "Ask the client → follow instructions", "Consult the fee → decide"],
        correctIndex: 0,
        explanation: "The procedure is what makes the Code principles-based rather than a rulebook.",
      },
      {
        question: "A financial interest in an audit client held by an engagement team member is:",
        options: ["Prohibited outright — no safeguard cures it", "Acceptable if disclosed", "Acceptable if immaterial to the member", "Acceptable with partner approval"],
        correctIndex: 0,
        explanation: "Direct financial interests in audit clients are on the prohibited list — divestment is the only response.",
      },
      {
        question: "Key audit partner rotation on listed audits follows:",
        options: ["Seven years on, then a two-year cooling-off period before returning to the same role", "Three years on, no cooling-off", "Lifetime tenure", "Rotation only at the client's request"],
        correctIndex: 0,
        explanation: "The long-association threat is managed by the 7+2 pattern for key partners.",
      },
      {
        question: "Contingent fees for audit engagements are:",
        options: ["Prohibited", "Permitted with disclosure", "Permitted for listed clients", "Permitted if below 5% of the fee"],
        correctIndex: 0,
        explanation: "An audit opinion can never be a commissionable outcome.",
      },
      {
        question: "Under NOCLAR, disclosure to an authority outside the client is:",
        options: ["A defined last-resort route where law protects the disclosure and the public interest justifies it", "Always forbidden by confidentiality", "The first step on discovery", "Only for tax matters"],
        correctIndex: 0,
        explanation: "The Code's ladder ends in legally protected external disclosure — confidentiality yields by design.",
      },
    ],
  },
}

export const SPINE_PART2 = [SPINE_550, SPINE_560, SPINE_580, SPINE_600, SPINE_ISQM, SPINE_ETHICS]
