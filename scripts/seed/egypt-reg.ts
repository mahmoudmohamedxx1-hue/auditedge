import { SeedCourse } from "./types"

export const egyReg: SeedCourse = {
  slug: "egypt-regulatory-framework",
  code: "EGY-REG",
  title: "The Egyptian Regulatory & Professional Framework",
  subtitle: "ESAA, the 2025 ISA alignment, FRA supervision and the obligations that shape Egyptian practice.",
  description:
    "The Egyptian audit landscape transformed with the issuance of Egyptian Standards on Auditing fully aligned with the ISAs in 2025. This course maps the profession's architecture — ESAA and the accountants' syndicates, the FRA's oversight of listed entities, CBE supervision of bank audits, AML obligations, and what the ISA alignment actually changes on real engagements. Essential grounding for every external auditor practicing in Egypt.",
  category: "Egyptian Framework",
  level: "Foundation",
  cpeHours: 4,
  instructorName: "Nour Abdel-Rahman",
  instructorTitle: "CFE, ESA · Forensic & Regulatory Specialist",
  instructorBio:
    "Nour leads forensic and regulatory advisory work for financial institutions in Cairo, trains bank audit teams on AML and fraud obligations, and lectures on the Egyptian regulatory framework for professional qualification candidates.",
  rating: 4.8,
  ratingCount: 267,
  studentsCount: 1054,
  icon: "landmark",
  accent: "gold",
  featured: true,
  order: 4,
  modules: [
    {
      title: "The Profession in Egypt",
      description: "Who governs auditors in Egypt, what the 2025 ISA alignment changed, and which regulator matters for which client.",
      lessons: [
        {
          title: "ESAA, Syndicates & the Audit Landscape",
          type: "lesson",
          durationMin: 15,
          xp: 10,
          content: {
            intro:
              "Egyptian audit practice operates inside a dual structure: a professional body that develops standards and ethics, and a syndicate system that controls who may practice. Understanding both is not academic — your registration status, your CPE obligations and your independence rules all flow from this architecture.",
            sections: [
              {
                heading: "The Egyptian Society of Accountants & Auditors (ESAA)",
                body: "Established by Royal Decree in 1946, ESAA is Egypt's professional accountancy organization and the IFAC member body. ESAA is responsible for developing the Egyptian Accounting Standards (EAS) and, through the standards committee structure, the Egyptian Standards on Auditing — which, since their 2025 reissue, are fully aligned with the international ISAs. ESAA also administers professional examinations and drives the CPE culture that international firms imported into the market. Membership and participation in ESAA's structures is a professional credential in itself, and the Society's guidance notes are the local interpretation layer above the standards.",
                bullets: [
                  "ESAA: est. 1946, IFAC member body, sets EAS & Egyptian Standards on Auditing",
                  "2025: Egyptian Standards on Auditing reissued fully aligned with ISAs",
                  "ESAA examinations and CPE structure anchor the profession's qualification path",
                ],
              },
              {
                heading: "The Syndicate System: License to Practice",
                body: "Practicing accountancy and audit in Egypt requires membership in the Syndicate of Accountants and Auditors — the professional licensing body with its own registration tiers (from general accountant through register 'A' auditors who may audit companies). The Syndicate controls entry examinations, practice licensing, and disciplinary jurisdiction over members. For engagement teams, the practical consequence: the engagement partner and signing auditors must hold the appropriate registration class for the entity type, and firms must maintain their registration in good standing — a status worth verifying during client acceptance for co-audit arrangements.",
              },
              {
                heading: "The Big-Firm Ecosystem and What It Imported",
                body: "Egypt's listed-entity market is dominated by Big-4 and large regional firms operating under international methodologies, which means global standards of documentation, independence systems and CPE discipline have become the local benchmark. Mid-market and boutique firms compete on partner attention and sector depth. For a learner, the implication is practical: mastery of the ISA framework (now the Egyptian framework) plus fluency in Egyptian regulatory specifics is the exact skill profile both segments hire and promote for.",
              },
            ],
            keyPoints: [
              "ESAA (1946) sets standards; the Syndicate licenses who may practice",
              "Registration tiers (e.g., register A) gate which entities an auditor may sign",
              "The 2025 ISA alignment makes international ISA training directly local",
              "Big-firm methodology culture sets the documentation benchmark market-wide",
            ],
            example: {
              title: "The Signing-Rights Question",
              context:
                "A growing Cairo firm wins an audit of a listed subsidiary. The proposed signing partner holds Syndicate registration adequate for limited-liability companies but not for the listed parent's statutory audit.",
              analysis:
                "This is a regulatory-capacity issue, not just a quality issue: Egyptian law ties audit signature rights for certain entity classes to registration tiers. The correct responses: co-audit with a registered signing partner, upgrade registration before the engagement, or decline. Discovering this at report date is an embarrassment; discovering it at planning is a decision. Knowing the architecture turns regulatory risk into calendar management.",
            },
            takeaway:
              "Two structures govern your practice: ESAA's standards and the Syndicate's license — keep both current, and verify them for counterparties.",
          },
        },
        {
          title: "Egyptian Standards on Auditing: The 2025 ISA Alignment",
          type: "lesson",
          durationMin: 16,
          xp: 10,
          content: {
            intro:
              "In 2025, Egypt reissued its Egyptian Standards on Auditing in full alignment with the ISAs — closing gaps that had accumulated through years of selective convergence. For practitioners, this is the most consequential methodology event in a generation: one framework now governs local and international work.",
            sections: [
              {
                heading: "What 'Full Alignment' Actually Means",
                body: "Full alignment means the Egyptian standards adopt the ISA text — including the clarified structure, application material and the 2019 risk assessment revisions — with conforming amendments for Egyptian legal references. The practical consequences are concrete: your ISA 315 (Revised 2019) training now IS your Egyptian-standard training; documentation expectations jump to the clarified-ISA level (explicit risk-response linkage, spectrum of inherent risk documentation); and inspection programs will benchmark files against the aligned standards. Firms that trained on older local versions have a real update obligation for every level of staff.",
                bullets: [
                  "Egyptian ESAs now mirror ISA text, including the 2019 ISA 315 revision",
                  "Documentation expectations rise to clarified-ISA level across the market",
                  "Regulator inspection programs will test files against the aligned standards",
                ],
              },
              {
                heading: "Where Local Law Still Diverges",
                body: "Standards alignment does not erase statutory particularities. Egyptian company law and sector regulations impose specific obligations that layer above the ISAs: statutory audit report formats, deadlines for listed-company reporting, e-filing regimes, and sector-specific circulars (CBE instructions for bank audits, FRA decisions for listed and non-bank financial institutions). The professional skill is two-column thinking: ISA methodology in one column, Egyptian statutory requirements in the other — and a work program that satisfies both without duplication.",
              },
              {
                heading: "What Changes on a Real Engagement",
                body: "On a typical engagement, the alignment changes four things. First, risk assessment documentation must show the revised ISA 315 discipline (inherent risk spectrum, five COSO components, IT environment analysis). Second, quality management aligns with ISQM 1, repositioning engagement-level reviews. Third, transparency reports and audit committee communications follow clarified-ISA language. Fourth, CPE content certified against the ISAs now satisfies local requirements directly — which is precisely what this platform delivers.",
              },
            ],
            keyPoints: [
              "One framework now governs: Egyptian ESAs = ISAs, including revisions",
              "Statutory requirements (formats, deadlines, circulars) still layer above",
              "Risk assessment and quality management documentation carry the biggest update burden",
              "ISA-based CPE now directly serves local qualification",
            ],
            example: {
              title: "The File That Needed a Retrofit",
              context:
                "A firm's template audit file still used the pre-alignment risk matrix (three-point risk scale, single control assessment). Post-alignment, an internal review flagged the file as non-compliant for an FRA-supervised client.",
              analysis:
                "The retrofit path: rebuild the risk memo to the inherent-risk-spectrum structure; document the five COSO components and the IT environment; re-map each significant risk to tailored responses; and refresh the EQCR checklist to clarified-ISA language. Firms that treated the 2025 alignment as a template-upgrade project — one partner sponsored, methodology team executing, training rolled to all staff — absorbed the change in one busy season. Firms that treated it as 'the same standards, new cover' are now carrying inspection risk on every file.",
            },
            takeaway:
              "The 2025 alignment unified your learning path with the international framework — invest in the revised-ISA discipline once, and it pays across every engagement and every market.",
          },
        },
        {
          title: "Regulators That Matter: FRA, CBE & EGX",
          type: "lesson",
          durationMin: 15,
          xp: 10,
          content: {
            intro:
              "Egyptian auditors answer to a constellation of regulators, each with its own jurisdiction, reporting channels and enforcement temperament. Knowing which regulator owns your client determines everything from report formats to where a suspected fraud gets reported.",
            sections: [
              {
                heading: "FRA: The Capital Markets & NBFI Supervisor",
                body: "The Financial Regulatory Authority supervises non-bank financial services and capital-market activity: listed companies, brokerage, mutual funds, leasing, factoring, consumer finance, insurance and mortgage finance. For auditors of FRA-supervised entities, the relationship is direct: FRA-circulated reporting formats, disclosure filing deadlines, and — in enforcement matters — auditor reporting obligations. FRA has been the most active recent driver of training partnerships with the profession, and its disclosure rules (timely announcement of material events) intersect directly with going concern and subsequent events judgements.",
                bullets: [
                  "Jurisdiction: listed entities, NBFI sectors, capital markets",
                  "Sets disclosure and filing expectations that shape audit deliverables",
                  "Active enforcement posture — materiality of market announcements is a live audit topic",
                ],
              },
              {
                heading: "CBE: Banking Supervision",
                body: "The Central Bank of Egypt licenses and supervises banks and, through its supervision sector, shapes the audit of banking institutions: approved auditor lists, specific reporting packages, IFRS-based returns with CBE formats, and deep expectations on loan classification and provisioning. Auditing a bank in Egypt is a specialist track: the team must know CBE circulars on asset classification, the provisioning framework, and AML expectations. Bank audit experience remains the most portable premium skill in the Egyptian market.",
              },
              {
                heading: "EGX, Tax Authority & Enforcement Interfaces",
                body: "The Egyptian Exchange (EGX) enforces listing rules — disclosure timeliness, related-party announcement discipline — that auditors must understand because financial statements and market announcements must cohere. The Egyptian Tax Authority is not a securities regulator but dominates practical audit risk: tax positions, transfer pricing exposure for multinationals, and e-invoicing/e-receipt integration now shape the completeness of revenue testing itself. A modern Egyptian auditor treats the tax ecosystem as part of the audit perimeter.",
              },
            ],
            keyPoints: [
              "FRA: listed + NBFI — disclosure formats, filing deadlines, enforcement",
              "CBE: banks — approved panels, reporting packages, provisioning frameworks",
              "EGX listing rules demand coherence between statements and announcements",
              "Tax authority interfaces (e-invoicing, transfer pricing) shape substantive testing",
            ],
            example: {
              title: "One Finding, Three Regulators",
              context:
                "During a listed manufacturer's audit, the team identifies misstated export revenue that the company had already celebrated in an EGX announcement months earlier.",
              analysis:
                "The correction cascades: restated financials (FRA filing implications), a corrective market announcement (EGX disclosure discipline), and tax exposure on the corrected VAT/income tax positions (Tax Authority). The auditor's own reporting obligations — to management, those charged with governance, and potentially to the regulator under Egyptian requirements for certain findings — must be mapped before the client controls the narrative. Regulator mapping is not background knowledge; it is the engagement's communication strategy.",
            },
            takeaway:
              "Map the regulator before fieldwork: FRA, CBE, EGX or tax-dominant — the map dictates report formats, deadlines, escalation paths and where findings must travel.",
          },
        },
      ],
    },
    {
      title: "Practicing in Egypt",
      description: "Governance interfaces, AML and fraud obligations, and how the Egyptian framework shows up in audit files.",
      lessons: [
        {
          title: "Audit Committees & Governance Requirements",
          type: "lesson",
          durationMin: 13,
          xp: 10,
          content: {
            intro:
              "Egyptian governance rules give audit committees real authority — approving auditor appointment, overseeing independence, and receiving auditor communications directly. The auditor-committee relationship is both a professional obligation and a career skill.",
            sections: [
              {
                heading: "The Committee's Mandate Over the Audit",
                body: "Under FRA governance rules for listed and supervised entities, the audit committee recommends the external auditor's appointment and remuneration, monitors the audit's progress, and receives reports on independence and audit findings. The practical consequence for engagement teams: your communication counterpart for ISA 260 matters is a committee with genuine authority and, increasingly, financial sophistication. Presenting significant findings to a committee is a distinct skill from memo-writing — preparation, materiality framing, and clear recommendations matter.",
                bullets: [
                  "Committee recommends appointment/remuneration; oversees audit progress",
                  "ISA 260 communications flow to a body with real enforcement power",
                  "Auditor independence communications are formal, documented obligations",
                ],
              },
              {
                heading: "Two-Way Value: What the Committee Gives Back",
                body: "The committee is not only an oversight destination — it is an information source for the auditor. Committee members' awareness of whistleblower concerns, disputes with management, financing negotiations and control weaknesses makes them a required inquiry channel under ISA 240 and ISA 260. A structured private session with the committee (without management present) is international best practice that Egyptian committees increasingly expect. Teams that treat the committee purely as a reporting obligation leave risk information uncollected.",
              },
            ],
            keyPoints: [
              "Committees recommend appointment and oversee the audit — engage them early",
              "Private sessions without management are expected practice for significant matters",
              "The committee is an inquiry source, not only a communication destination",
            ],
            example: {
              title: "The Private Session That Changed the Audit",
              context:
                "In a private committee session, one member raised concerns about a newly-hired commercial director's expense claims and unusual distributor relationships. Management had dismissed the questions.",
              analysis:
                "The session converted a governance whisper into audit-relevant risk information: fraud risk factors on expenses and related-party sales channels entered the ISA 240 risk assessment, procedures were expanded, and the committee expected follow-up reporting. Without the session, none of this surfaces. Committees hold the information that formal channels filter out — the auditor's job is to ask in the right room.",
            },
            takeaway:
              "Treat the audit committee as a professional partner: communicate with discipline, inquire with structure, and use private sessions to surface what management filters.",
          },
        },
        {
          title: "AML & Fraud Reporting Obligations in Egypt",
          type: "lesson",
          durationMin: 15,
          xp: 10,
          content: {
            intro:
              "Egypt's AML regime — anchored in the Anti-Money Laundering Law and the Egyptian Money Laundering & Terrorist Financing Combating Unit (EMLCU) — creates obligations that intersect with audit work in specific, examinable ways. Separately, fraud discovered in an audit triggers its own reporting decision tree.",
            sections: [
              {
                heading: "The AML Framework and the Auditor's Position",
                body: "The Egyptian AML law obliges 'financial institutions and designated non-financial businesses' to customer-due-diligence, record-keeping and suspicious-transaction reporting to the EMLCU. External auditors are generally not the primary obligated entity — but two intersections matter. First, when auditing obligated entities (banks, exchange companies, finance companies), the auditor must assess the client's AML compliance framework as part of understanding the business and its regulatory risk. Second, when audit procedures surface transactions with money-laundering indicators, professional judgment and legal advice govern escalation — including considerations of tipping-off and the interplay with ISA 250 (laws and regulations) and ISA 240 (fraud).",
                bullets: [
                  "EMLCU: Egypt's financial intelligence unit receiving STRs",
                  "Auditing obligated entities → assess their AML framework as business context",
                  "Suspect transactions surfacing in audit work → structured escalation, no tipping-off",
                ],
              },
              {
                heading: "Fraud: The Reporting Decision Tree",
                body: "When an auditor discovers fraud or suspected fraud: (1) evaluate implications for the audit and risk assessment under ISA 240; (2) communicate to the appropriate level of management and those charged with governance — seniority of communication scaled to the seniority of involvement; (3) consider legal and regulatory reporting obligations, where Egyptian law may require reporting to specific authorities for certain entity types; (4) document the evaluation path, including reasons for reporting or not reporting externally; (5) consider professional advice and, in extreme cases, resignation. The discipline is that each branch is a conscious, documented decision — never silence by default.",
              },
              {
                heading: "Tax Evasion, Records and the Practical Edge",
                body: "Egyptian criminal law provisions on falsification of books and records intersect with audit findings: assisting or tolerating known record falsification creates exposure for the auditor personally. Practically, this sharpens the meaning of 'management integrity' in client-acceptance and continuation decisions. An Egyptian auditor's independence architecture — the IESBA-based code now embedded via the ESAA framework — is not just an ethics exercise; it is personal legal protection.",
              },
            ],
            keyPoints: [
              "Auditors of obligated entities must understand the client's AML framework",
              "Fraud discovery triggers a documented decision tree: audit impact → governance → legal",
              "Records-falsification provisions create personal exposure — independence protects you",
              "Tipping-off considerations constrain how AML suspicions are escalated",
            ],
            example: {
              title: "The Structured Deposit Pattern",
              context:
                "In auditing a leasing company, the team notices a portfolio client whose account receives many rapid cash deposits just below reporting thresholds, immediately swept to a related consultancy.",
              analysis:
                "This is textbook structuring — an AML red flag. The auditor's path: it is a business/regulatory risk of the client (their AML systems should catch it — test them), a potential ISA 250 non-compliance matter, and potentially an escalation trigger requiring legal counsel on external reporting. What it is NOT is a matter for casual inquiry to the client's management ('we noticed your customer...') without considering tipping-off. Structured escalation — internal documentation, legal advice, then action — is the professional route.",
            },
            takeaway:
              "AML and fraud obligations turn audit discoveries into decision trees — walk every branch deliberately, document every choice, and protect yourself with the independence framework.",
          },
        },
        {
          title: "Knowledge Check: The Egyptian Framework",
          type: "quiz",
          durationMin: 8,
          xp: 25,
          content: {
            intro: "Test your command of the Egyptian regulatory landscape. 70% to pass.",
            sections: [],
            keyPoints: [],
            takeaway: "",
          },
          quiz: {
            title: "Egyptian Regulatory & Professional Framework — Knowledge Check",
            passScore: 70,
            questions: [
              {
                question:
                  "The 2025 reissue of the Egyptian Standards on Auditing is significant because it:",
                options: [
                  "Created a standalone Egyptian framework diverging from the ISAs",
                  "Aligned the Egyptian standards fully with the international ISAs, including the 2019 revisions",
                  "Replaced IFRS with local accounting rules",
                  "Removed CBE supervision of bank audits",
                ],
                correctIndex: 1,
                explanation:
                  "The 2025 alignment means Egyptian ESAs adopt the ISA text — including ISA 315 (Revised 2019) — making ISA-based training and methodology directly applicable to local engagements.",
              },
              {
                question:
                  "Which regulator supervises listed companies and non-bank financial institutions (leasing, factoring, consumer finance) in Egypt?",
                options: [
                  "Central Bank of Egypt (CBE)",
                  "Egyptian Exchange (EGX)",
                  "Financial Regulatory Authority (FRA)",
                  "Egyptian Tax Authority",
                ],
                correctIndex: 2,
                explanation:
                  "FRA supervises capital markets and non-bank financial services. CBE supervises banks; EGX enforces listing rules; the Tax Authority administers tax.",
              },
              {
                question:
                  "ESAA's role in the Egyptian profession includes:",
                options: [
                  "Licensing who may practice auditing through registration tiers",
                  "Setting accounting & auditing standards and serving as the IFAC member body",
                  "Supervising listed company disclosures directly",
                  "Approving every audit report before issuance",
                ],
                correctIndex: 1,
                explanation:
                  "ESAA develops standards (EAS, ESAs) and is the IFAC member body. Licensing to practice runs through the Syndicate of Accountants and Auditors.",
              },
              {
                question:
                  "During an audit, you discover evidence of material fraud by the CFO. Under the ISA-based framework applicable in Egypt, your FIRST professional obligation is to:",
                options: [
                  "Report directly to the FRA before any internal steps",
                  "Evaluate the implications for the audit and communicate to those charged with governance at the appropriate level",
                  "Resign immediately without documentation",
                  "Notify the entity's bank lenders",
                ],
                correctIndex: 1,
                explanation:
                  "ISA 240: evaluate implications for risk assessment, communicate to management/TAG at the appropriate level, then consider legal/regulatory obligations — each step documented. External reporting decisions follow structured evaluation, not reflex.",
              },
              {
                question:
                  "Auditing an Egyptian bank differs from a typical corporate audit primarily because:",
                options: [
                  "Banks are exempt from ISA documentation requirements",
                  "CBE supervision adds specific approved-auditor, reporting-package and provisioning framework requirements",
                  "Banks do not require audited financial statements",
                  "IFRS does not apply to Egyptian banks",
                ],
                correctIndex: 1,
                explanation:
                  "Bank audits operate inside CBE's supervisory framework — approved auditor panels, specific reporting returns, loan classification and provisioning circulars — layered on top of ISA methodology.",
              },
            ],
          },
        },
      ],
    },
  ],
}
