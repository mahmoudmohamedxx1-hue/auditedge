/**
 * Case-based engagement simulation (P1-5).
 *
 * Scenario: a year-end statutory audit of a mid-size Egyptian textile
 * manufacturer, walked end-to-end — client acceptance → risk assessment
 * → response → completion → reporting. Every decision point carries
 * authored scoring (0-4 points + senior-level feedback); two judgment
 * calls are free-text and graded by the AI tutor against a rubric, with
 * a neutral mid-score fallback when the engine is unreachable.
 *
 * The case deliberately seeds the classic Egyptian mid-cap fact pattern:
 * owner-concentrated governance, related-party distribution abroad,
 * inventory split across sites, a squeezed going-concern position, and
 * an audit committee that only meets when the parent insists.
 */

export interface SimOption {
  id: string
  label: string
  points: number // 0-4
  feedback: string
  ideal?: boolean
}

export interface SimDecision {
  id: string
  prompt: string
  /** extra facts revealed only when this decision is reached */
  context?: string
  options?: SimOption[]
  /** free-text judgment graded by the AI tutor against the rubric */
  freeText?: boolean
  rubric?: string
}

export interface SimStage {
  id: string
  title: string
  brief: string
  docs: { label: string; body: string }[]
  decisions: SimDecision[]
}

export interface SimScenario {
  slug: string
  title: string
  company: string
  sector: string
  summary: string
  maxScore: number
  stages: SimStage[]
}

export const NILE_TEXTILES: SimScenario = {
  slug: "nile-textiles-fy26",
  title: "Nile Textiles Manufacturing S.A.E. — FY2026 Statutory Audit",
  company: "Nile Textiles Manufacturing S.A.E.",
  sector: "Textiles & apparel manufacturing — Greater Cairo, Egypt",
  summary:
    "You are the engagement senior on a 4.2m EGP-fee statutory audit of a family-controlled textile exporter (revenue 612m EGP). The prior firm resigned mid-cycle, Gulf sales run through a related distributor, and the factory's bank covenants are tight. You call the judgment calls — from acceptance through the opinion.",
  maxScore: 60, // 13 choice decisions × 4 + 2 free-text × 4
  stages: [
    {
      id: "acceptance",
      title: "Stage 1 — Client Acceptance & Continuance",
      brief:
        "The prospective client approached your firm in late November 2026, six weeks before year-end, after their previous auditor resigned. You hold the partner's file: the company profile, the predecessor's resignation letter, and a draft engagement letter.",
      docs: [
        {
          label: "Company profile (PBC excerpt)",
          body: "Nile Textiles Manufacturing S.A.E. — incorporated 1998, 10th of Ramadan City. Revenue FY2026 (unaudited): 612m EGP (FY2025: 554m). Ownership: El-Sayed family 78%, MISR Growth Fund 15%, minority 7%. Two of five board seats held by family members; the audit committee chair is the founder's brother-in-law. Exports: 41% of sales to Gulf Distribution FZE (Sharjah), owned by the founder's eldest son. Borrowings: 285m EGP syndicated facility (Banque Misr lead) with a 2.5x net-debt/EBITDA covenant. The 2025 audited accounts were qualified — inventory valuation (obsolete dyes) — by the predecessor.",
        },
        {
          label: "Predecessor auditor's resignation letter (excerpt)",
          body: "“... our resignation follows the Board's decision to reduce the audit fee for the second consecutive year by 35%, which we assessed as incompatible with the scope required by ISAs... We confirm there are no circumstances connected with our resignation which we consider should be disclosed to members or creditors...”",
        },
      ],
      decisions: [
        {
          id: "acc-fee",
          prompt:
            "The client offers a fee of 4.2m EGP — 35% below the predecessor's — with a fixed scope of 'statutory audit and report'. What is the correct first response under ISQM 1 and the ethics framework?",
          options: [
            {
              id: "accept",
              label: "Accept the fee as offered — price competition is normal and the fee is still substantial.",
              points: 0,
              feedback:
                "Accepting a fee 35% below the prior year for the same scope is a self-interest threat to professional competence and due care: the fee must be sufficient to resource the engagement per ISQM 1. Accepting without documented evaluation is an ethics breach in waiting.",
            },
            {
              id: "accept-conditions",
              label: "Accept but plan to limit substantive work to whatever the fee permits.",
              points: 0,
              feedback:
                "Never. Scope must be driven by the ISAs, not the fee. 'Audit to budget' is how firms end up in front of regulators — the scope decision belongs to risk, not price.",
            },
            {
              id: "evaluate",
              label: "Evaluate whether the fee allows ISA-compliant resourcing; document the fee adequacy, and communicate with the predecessor before accepting.",
              points: 4,
              ideal: true,
              feedback:
                "Exactly. Acceptance requires: (1) confirming the fee covers the personnel and hours the risk profile demands (ISQM 1 engagement-level resources), and (2) communicating with the predecessor — their reply may reveal the resignation's true reasons. Both belong in the acceptance file.",
            },
            {
              id: "walk",
              label: "Decline — a fee cut after a qualification is always a red flag.",
              points: 2,
              feedback:
                "Declining is defensible but premature before evaluation. The fee cut follows a qualified opinion, which is a risk indicator to investigate, not an automatic bar. Acceptance decisions should be made on documented evaluation, not instinct.",
            },
          ],
        },
        {
          id: "acc-communication",
          prompt:
            "You ask the client for permission to contact the predecessor auditor. The CFO replies: 'The relationship ended badly — I'd rather you didn't. Everything you need is in the file.' What do you do?",
          options: [
            {
              id: "proceed",
              label: "Proceed — the working papers tell you everything anyway.",
              points: 0,
              feedback:
                "They never do. Without predecessor communication you cannot know about disputes, unresolved judgments, or management-integrity issues. Accepting under client pressure here transfers their conflict onto you.",
            },
            {
              id: "insist",
              label: "Explain that professional communication before accepting a new audit is expected practice and that you cannot accept until it happens; if refused, treat the refusal as a client-integrity red flag.",
              points: 4,
              ideal: true,
              feedback:
                "Right. The expectation of inter-auditor communication is professional practice and the client's refusal is itself evidence about the environment you'd be working in. Documenting both the request and the refusal protects the firm either way.",
            },
            {
              id: "partner-decides",
              label: "Let the engagement partner decide — this is above a senior's grade.",
              points: 1,
              feedback:
                "Escalating is fine, but abdicating the analysis is not. Bring the partner a recommendation with reasons, not just a forwarded email — that is what 'senior' means.",
            },
            {
              id: "audit-committee",
              label: "Bypass the CFO and raise the issue with the audit committee chair directly.",
              points: 3,
              feedback:
                "A reasonable escalation route, though note the chair's independence is compromised here (family tie). Still, going above management on acceptance communication is legitimate — just pair it with the documented evaluation from the prior decision.",
            },
          ],
        },
        {
          id: "acc-independence",
          prompt:
            "During acceptance due diligence you discover the engagement partner's spouse works in the HR department of Nile Textiles (payroll clerk, no financial reporting role). Under the IESBA Code, what is the required response?",
          options: [
            {
              id: "ignore",
              label: "Ignore — a payroll clerk cannot influence the audit.",
              points: 1,
              feedback:
                "The instinct (immaterial role) is right, but 'ignoring' is the wrong verb. Even low-threat circumstances must be evaluated; the answer is documentation, not silence.",
            },
            {
              id: "reassign-firm",
              label: "Decline the engagement — the firm cannot audit an entity employing a partner's spouse.",
              points: 0,
              feedback:
                "Overkill. The Code asks for threat evaluation and safeguards proportionate to the threat, not automatic disqualification. A non-reporting-role family employment is a manageable familiarity/self-interest threat.",
            },
            {
              id: "evaluate-document",
              label: "Evaluate the threat (familiarity/self-interest), conclude it is not at an unacceptable level for a non-reporting role, apply any needed safeguard such as partner rotation in planning reviews, and document the evaluation.",
              points: 4,
              ideal: true,
              feedback:
                "Textbook. Identify threat → evaluate significance → safeguard → document. The Code's conceptual framework is a decision process, and your file should show each step.",
            },
            {
              id: "disclose-only",
              label: "Disclose the relationship to the client and proceed with no further steps.",
              points: 2,
              feedback:
                "Disclosure is a good habit but does not by itself address the threat. The Code wants evaluation and safeguards, with the disclosure as supporting transparency.",
            },
          ],
        },
      ],
    },
    {
      id: "risk",
      title: "Stage 2 — Risk Assessment (ISA 315 / 240 / 550)",
      brief:
        "Fieldwork planning, December 2026. You hold the unaudited trial balance, walk-through notes from the Mahalla El-Kubra fabric plant, and the sales cycle narrative. The team is two associates and you.",
      docs: [
        {
          label: "Unaudited P&L extract (FY2026 vs FY2025, m EGP)",
          body: "Revenue 612.0 (554.0, +10.5%) · Domestic 361.0 (395.0, −8.6%) · Exports — Gulf Distribution FZE 251.0 (159.0, +57.9%) · Gross margin 22.1% (24.8%) · Admin expenses 38.2 (41.0) · FX loss 19.4 (2.1) · Net finance cost 33.6 (24.0) · Profit before tax 8.9 (30.1) · EBITDA (management's computation) 71.0 (74.5).",
        },
        {
          label: "Walk-through note — sales & receivables",
          body: "All export sales are FOB Alexandria, invoiced in USD to Gulf Distribution FZE, received into a USD account. Receivables aging: 41% of export receivables > 120 days at 31 Dec (prior year 12%). No credit-loss provision computed on export book ('they are family, they pay'). The sales manager confirms pricing to the distributor is set quarterly by the founder 'to keep the group competitive'. Domestic revenue fell after the March 2026 devaluation while exports jumped 58%.",
        },
        {
          label: "Bank covenant letter (syndicate, excerpt)",
          body: "Net debt / EBITDA ≤ 2.50x tested quarterly on management (unaudited) figures. 30 Sep 2026 management computation: 2.47x. The syndicate may accelerate on breach. A waiver request is 'under discussion' per the CFO.",
        },
      ],
      decisions: [
        {
          id: "risk-related-party",
          prompt:
            "Export revenue to Gulf Distribution FZE grew 58% to 251m EGP in a year when domestic sales fell and receivable aging tripled. Which risk characterization is correct under ISA 550 and ISA 315?",
          options: [
            {
              id: "fraud-risk",
              label: "A significant risk: related-party transactions in an owner-dominated business with deteriorating receivables and opaque pricing — presumptively also a fraud risk (revenue recognition).",
              points: 4,
              ideal: true,
              feedback:
                "Yes. Related parties controlled by the owner's family + one counterparty taking 41% of revenue + stretch receivables + management-set pricing is the textbook significant-risk cluster, and revenue recognition is always presumptively fraudulent under ISA 240. This needs to drive the audit response, not just the risk register.",
            },
            {
              id: "normal-growth",
              label: "Normal commercial growth — exports rising after a devaluation is expected economics.",
              points: 1,
              feedback:
                "The devaluation logic explains direction, not magnitude or aging. A 58% jump plus 120-day receivables from a family entity needs evidence, not narrative. Risk assessment that accepts management's story is decoration.",
            },
            {
              id: "going-concern-only",
              label: "It is primarily a going-concern indicator; treat under ISA 570 and move on.",
              points: 1,
              feedback:
                "The covenant pressure is real, but this pattern is primarily a related-party/valuation/revenue cluster. Filing it under ISA 570 alone would leave the biggest misstatement channel unaddressed.",
            },
            {
              id: "defer",
              label: "Defer the assessment until the inventory count in January.",
              points: 0,
              feedback:
                "Risk assessment drives the count plan, not the other way around. Deferring the judgment leaves the whole interim plan built on nothing.",
            },
          ],
        },
        {
          id: "risk-analytical",
          prompt:
            "Which analytical procedure, run at planning on the data above, most sharply sharpens the revenue risk?",
          context:
            "Your associate offers to 'do the standard margin analysis' from the trial balance.",
          options: [
            {
              id: "gross-margin",
              label: "Monthly gross margin by market (domestic vs. Gulf FZE) with per-metre price and volume decomposition.",
              points: 4,
              ideal: true,
              feedback:
                "Correct — the decomposition separates price effects (transfer-pricing manipulation) from volume effects (genuine demand), and doing it monthly catches period-end loading. A single blended margin number hides exactly what this fact pattern needs exposed.",
            },
            {
              id: "ratio-pack",
              label: "The standard ratio pack (liquidity, gearing, turnover) versus prior year and industry.",
              points: 2,
              feedback:
                "Useful context, but too blunt for this risk. The question here is whether export pricing and cut-off are real — the pack answers neither.",
            },
            {
              id: "covenant-check",
              label: "Recompute the covenant ratio to confirm the 2.47x.",
              points: 2,
              feedback:
                "Worth doing for going concern, but it tests a management metric downstream of the revenue question. Fix the input first.",
            },
            {
              id: "budget-variance",
              label: "Compare actuals to the board-approved budget.",
              points: 1,
              feedback:
                "Budgets authored by the same owner-dominated board are weak corroboration of the specific channel you are worried about.",
            },
          ],
        },
        {
          id: "risk-free-text",
          prompt:
            "The CFO tells you: 'Provisions? We don't need credit-loss provisions on the Gulf book — it's the founder's son's company, he will always pay.' In no more than five sentences, state the accounting answer (ECL under IFRS 9) AND the audit response this statement demands.",
          freeText: true,
          rubric:
            "A strong answer: (1) under IFRS 9, expected credit losses are measured from the contractual cash flows and forward-looking information — ownership ties are NOT collateral and family assurance is not credit enhancement; a lifetime ECL on the 120+ day export book is hard to avoid given the aging and the covenant stress on the counterparty group; (2) the audit response: treat the zero-provision position as a significant risk of material misstatement (valuation of receivables), obtain the aging and the distributor's payment history, test whether the distributor can actually pay (its own financials, or the group's), evaluate management's ECL model and assumptions against ISA 540, and consider a written representation plus the effect on KAM/opinion if management refuses to provide. Mentioning ISA 540 for accounting estimates and challenging management's assertion rather than accepting the family narrative earns full marks.",
        },
      ],
    },
    {
      id: "response",
      title: "Stage 3 — Designing the Response (ISA 330 / 505 / 530)",
      brief:
        "January 2027. The response plan must now be turned into specific procedures. The count is at two sites; confirmations go out; sampling decisions are yours.",
      docs: [
        {
          label: "Inventory sites at 31 Dec 2026",
          body: "Site A — 10th of Ramadan finished-goods warehouse (68% of inventory value). Site B — Alexandria free-zone transit shed (18%: fabric awaiting export loading, incl. 12 containers invoiced to Gulf FZE in late December). Site C — Mahalla plant dyes & chemicals (14%, includes dyes held 5+ years).",
        },
        {
          label: "Confirmation status snapshot (as of 15 Jan)",
          body: "Banque Misr syndicate agent — reply received, balances agree, but the reply lists a 'side letter dated 28 Dec 2026 re: waiver of Q3 covenant breach — unsigned draft' not in the PBC. Gulf Distribution FZE — no reply to positive confirmation; the client says 'we told you they are slow'. Three major domestic customers — all agreed. Attorney for the Greek dye supplier litigation — no reply yet.",
        },
      ],
      decisions: [
        {
          id: "res-count",
          prompt:
            "How should you cover Site B — the Alexandria transit shed holding December-invoiced export fabric?",
          options: [
            {
              id: "skip",
              label: "Rely on Site A's count — the free-zone shed is a small balance.",
              points: 0,
              feedback:
                "18% of inventory value is not small, and the December invoicing makes this the cut-off epicenter. Skipping it removes the one place where revenue timing could actually be tested.",
            },
            {
              id: "observe",
              label: "Attend a physical count at Site B with container/seal verification against invoices and bill-of-lading dates, specifically testing whether December revenue should exist at all (goods not shipped).",
              points: 4,
              ideal: true,
              feedback:
                "Exactly right — this is the cut-off test that matters. Verifying seals, bills of lading, and loading dates against invoice dates tests both existence of inventory and the occurrence of revenue in one procedure.",
            },
            {
              id: "representations",
              label: "Obtain a management representation that Site B inventory is correctly stated.",
              points: 1,
              feedback:
                "Representations corroborate; they never substitute for verifiable evidence on a significant risk. ISA 580 is not a substitute for ISA 500.",
            },
            {
              id: "analytical-only",
              label: "Perform analytical roll-forward from November counts.",
              points: 1,
              feedback:
                "Roll-forward works only when the base and the movement are reliable — neither is established here, and cut-off at year-end is precisely what roll-forward cannot see.",
            },
          ],
        },
        {
          id: "res-confirmation",
          prompt:
            "Gulf Distribution FZE has not replied to the positive confirmation. The client says to just use their word. What is the correct next step under ISA 505?",
          options: [
            {
              id: "accept-client",
              label: "Accept management's assertion — the counterparty is family and slow payers, not avoiders.",
              points: 0,
              feedback:
                "The family tie is the reason for doubt, not comfort. Accepting the debtor's silence as evidence, from the party whose transactions are the significant risk, is an evidence failure.",
            },
            {
              id: "alternative",
              label: "Design alternative procedures — subsequent cash receipts after year-end, sales contracts and shipping documents, and possibly a second confirmation attempt including e-mail; if evidence remains insufficient, this is a potential scope limitation.",
              points: 4,
              ideal: true,
              feedback:
                "Correct. ISA 505's hierarchy is exactly this: unreplied positive confirmations trigger alternative procedures, and if those cannot provide sufficient appropriate evidence, the auditor faces a scope limitation with opinion-level consequences. Recognizing the opinion link is the senior-level insight.",
            },
            {
              id: "negative",
              label: "Send a negative confirmation instead — no response will then mean the balance is fine.",
              points: 1,
              feedback:
                "Negative confirmations only work for many small, low-risk balances with a right to expect response — the opposite of this fact pattern. This would be procedure theatre.",
            },
            {
              id: "threaten",
              label: "Tell the client you will qualify unless the distributor replies.",
              points: 2,
              feedback:
                "Jumping straight to the threat skips the professional sequence: alternatives first, escalation of the evidence problem to the audit committee if unresolved, then the opinion. Qualification is a conclusion, not an opening move.",
            },
          ],
        },
        {
          id: "res-sampling",
          prompt:
            "For testing export sales pricing (a significant risk), your associate proposes attribute sampling on 25 invoices with a 10% tolerable deviation. What do you advise?",
          options: [
            {
              id: "ok",
              label: "Agree — 25 items at 10% is the firm's default for control tests.",
              points: 1,
              feedback:
                "Defaults are for defaults. A significant risk with 58% growth and management-set pricing needs a response with real coverage — and pricing accuracy is not a binary attribute here; the price level itself is the assertion at risk.",
            },
            {
              id: "substantive-targeted",
              label: "Increase coverage and target the risk: larger sample weighted to Q4 and quarter-end dates, recomput price against the quarterly price list and board minutes, and corroborate the price level against market/fabric indices for transfer-pricing reasonableness.",
              points: 4,
              ideal: true,
              feedback:
                "Right. The response must match the risk: period-end weighting catches loading, recomputation tests accuracy, and the external benchmark is what actually challenges a transfer price set by the owner. This is risk-based auditing rather than template auditing.",
            },
            {
              id: "test-of-details-all",
              label: "Test 100% of export invoices — the population is only ~400 items.",
              points: 3,
              feedback:
                "Defensible and thorough, but 100% testing is a luxury spend; targeted stratification (all period-end items + sample of the rest) achieves the same assurance for a fraction of the budget you do not have.",
            },
            {
              id: "controls-rely",
              label: "Rely on the pricing approval control — test it once and reduce substantive work.",
              points: 2,
              feedback:
                "The 'pricing control' is the founder setting prices quarterly — that is the risk, not a control to rely on. Relying on it would be circular.",
            },
          ],
        },
      ],
    },
    {
      id: "completion",
      title: "Stage 4 — Completion & Going Concern (ISA 570 / 560 / 580)",
      brief:
        "February 2027. Draft accounts are in. The covenant question lands on your desk with the unsigned waiver side-letter.",
      docs: [
        {
          label: "Draft FY2026 financials — key judgments",
          body: "Draft profit before tax 8.9m EGP. Management's EBITDA computation for the covenant: 71.0m — includes an add-back of 11.3m 'one-off' inventory write-down recognized only in December, and capitalizes 4.0m of dye procurement costs the industry expenses immediately. Going-concern basis used. No ECL provision on the export book (as before). Events after year-end: on 20 Feb 2027 the syndicate sent a reservation-of-rights letter regarding the Q3 breach.",
        },
        {
          label: "The unsigned side letter (bank file)",
          body: "“The Agent confirms the Syndicate's intention to grant a waiver of the 30 Sep 2026 covenant breach, subject to final credit committee approval and to the Borrower's delivery of audited FY2026 financial statements showing Net Debt/EBITDA ≤ 2.50x.” — dated 28 Dec 2026, unsigned.",
        },
      ],
      decisions: [
        {
          id: "comp-ebitda",
          prompt:
            "Management's covenant EBITDA of 71.0m adds back the December inventory write-down and capitalizes dye costs. The audited P&L shows 8.9m profit. How do you treat this for the going-concern evaluation under ISA 570?",
          options: [
            {
              id: "management-figure",
              label: "Use management's 71.0m EBITDA — the covenant is contractually defined by the facility agreement.",
              points: 1,
              feedback:
                "The covenant's contractual definition is a fact, but the add-backs distort the economics the covenant is meant to monitor, and the write-down timing (December, post-breach) looks managed. ISA 570 asks you to evaluate the substance of the situation, not to underwrite a definition.",
            },
            {
              id: "evaluate-events",
              label: "Evaluate going concern on the substance: recompute without the questionable add-backs and capitalization (EBITDA closer to 56m — likely a breach at 30 Sep and at year-end), weigh the unsigned waiver letter and the post-year-end reservation-of-rights as mitigating/ aggravating events, and assess whether use of the going-concern basis is appropriate with adequate disclosure.",
              points: 4,
              ideal: true,
              feedback:
                "This is the full ISA 570 thought path: period of coverage to at least 12 months from approval, management's assessment vs. your independent view, the evidential weight of an unsigned, conditional waiver, and the reservation letter as a subsequent event under ISA 560. The disclosure consequence (material uncertainty) is then a conclusion, not an assumption.",
            },
            {
              id: "immediately-emphasis",
              label: "Plan an Emphasis of Matter paragraph now — going concern is obviously in doubt.",
              points: 1,
              feedback:
                "An EOM presupposes adequate disclosure of a material uncertainty you have concluded exists; skipping the evaluation reverses the logic. ISA 706 EOMs are not a safety net for unfinished work.",
            },
            {
              id: "rely-waiver",
              label: "Rely on the waiver letter as management's mitigation — banks restructure all the time.",
              points: 2,
              feedback:
                "The waiver is unsigned and conditional — precisely the kind of mitigating factor ISA 570 requires you to test for feasibility and enforceability, not accept on optimism. Better than the P&L-only answers, but not yet an evaluation.",
            },
          ],
        },
        {
          id: "comp-subsequent",
          prompt:
            "The syndicate's 20 Feb 2027 reservation-of-rights letter arrives after year-end. Under ISA 560, what is the correct handling?",
          options: [
            {
              id: "ignore",
              label: "Ignore — it is after the balance sheet date.",
              points: 0,
              feedback:
                "ISA 560's whole point is that some post-balance-sheet events are adjusting or at least disclosure-worthy. This letter bears directly on the going-concern assessment and must be in the file.",
            },
            {
              id: "disclose-evaluate",
              label: "Treat it as evidence in the going-concern evaluation covering the period up to sign-off, require disclosure of the covenant position and the letter, and if management's mitigation is inadequate to support the going-concern basis, address the reporting consequences (material uncertainty paragraph / adverse opinion as applicable).",
              points: 4,
              ideal: true,
              feedback:
                "Complete and correctly sequenced. The letter is both a completion-event and a stress-test of management's mitigation plan, and the reporting cascade under ISA 570 (material uncertainty → MUM paragraph; inadequate disclosure → qualified/adverse) is correctly held open until the evaluation concludes.",
            },
            {
              id: "ask-client-only",
              label: "Ask the CFO to explain the letter and file her answer.",
              points: 1,
              feedback:
                "Inquiry is a start, not a procedure. The letter's legal effect needs reading against the facility agreement — from the bank's own words, not management's paraphrase.",
            },
            {
              id: "withdraw",
              label: "Withdraw from the engagement — the covenant situation makes the audit unfinishable.",
              points: 1,
              feedback:
                "Nothing about a covenant negotiation prevents completing an audit. Withdrawal would be an abdication of exactly the judgment work the engagement needs.",
            },
          ],
        },
        {
          id: "comp-representation",
          prompt:
            "Which set of written representations must you obtain under ISA 580 for this engagement?",
          options: [
            {
              id: "standard-only",
              label: "The firm's standard letter — responsibility for the financial statements and completeness of transactions.",
              points: 1,
              feedback:
                "Necessary but insufficient. This engagement's specific risks demand specific representations; a generic letter leaves the judgment areas unrepresented.",
            },
            {
              id: "tailored",
              label: "The standard letter PLUS: completeness of related-party disclosures and the Gulf FZE relationship (ISA 550), management's going-concern assessment and the status of the waiver (ISA 570), subsequent-events completeness including the reservation letter, intentions behind the inventory write-down timing, and that the ECL assessment was made with full knowledge of the distributor's payment capacity.",
              points: 4,
              ideal: true,
              feedback:
                "Exactly — representations must be tailored to the judgments actually made. This list mirrors every significant risk in the file, which is what ISA 580's 'specific representations' requirement means in practice.",
            },
            {
              id: "none",
              label: "None — representations only repeat what the working papers already show.",
              points: 0,
              feedback:
                "ISA 580 requires them; they carry evidential weight precisely where third-party evidence is unavailable (here: completeness and intent). Not collecting them is an ISA breach.",
            },
            {
              id: "oral",
              label: "Oral confirmations from the CFO, minuted by the associate.",
              points: 0,
              feedback:
                "ISA 580 requires written representations signed by management with appropriate responsibility. Minutes of conversations are not a substitute.",
            },
          ],
        },
      ],
    },
    {
      id: "reporting",
      title: "Stage 5 — Forming & Reporting the Opinion (ISA 700 / 701 / 705 / 706)",
      brief:
        "Sign-off week, March 2027. The file now supports these conclusions: revenue recognition at Site B was overstated 9.6m EGP (goods not shipped — management agreed to adjust); the export receivables remain unprovisioned (management refuses — potential misstatement 6.2m EGP, material but not pervasive); the going-concern disclosure is adequate in your judgment and a material-uncertainty paragraph is warranted; the inventory write-down timing and covenant EBITDA add-backs were resolved by disclosure.",
      docs: [
        {
          label: "Materiality computation (your file)",
          body: "Benchmark: profit before tax is volatile (8.9m vs 30.1m prior year); you selected 1.5% of revenue = 9.2m EGP overall materiality, performance materiality 6.4m, clearly-trivial threshold 0.9m. Misstatements: revenue 9.6m (adjusted — now nil), receivables ECL 6.2m (unadjusted).",
        },
      ],
      decisions: [
        {
          id: "rep-opinion",
          prompt:
            "With the 6.2m unadjusted receivables misstatement against performance materiality of 6.4m and overall materiality of 9.2m, what is the correct opinion under ISA 705?",
          options: [
            {
              id: "unmodified",
              label: "Unmodified — the misstatement is below overall materiality.",
              points: 1,
              feedback:
                "Tempting, but performance materiality exists precisely to leave headroom for undetected misstatements; a single known misstatement that consumes 97% of it is not 'below materiality' in any decision-useful sense. ISA 450 points to evaluating whether the FS as a whole is materially misstated — this one sits right on the line the PM was set to protect.",
            },
            {
              id: "qualified",
              label: "Qualified opinion — material misstatement (valuation of receivables) that is material but not pervasive; 'except for' the ECL provision.",
              points: 4,
              ideal: true,
              feedback:
                "Correct. A 6.2m known unadjusted misstatement breaching performance materiality on a significant-risk assertion, confined to one balance (not pervasive), is the classic 'except-for' qualification under ISA 705. The reasoning chain — materiality → breach → pervasiveness → opinion type — is exactly the judgment the exam boards test.",
            },
            {
              id: "adverse",
              label: "Adverse — the refusal signals deeper integrity problems.",
              points: 2,
              feedback:
                "Adverse requires pervasive misstatement or fundamental unreliability. Management's refusal to provision one balance, with the rest of the file audited and adjusted, is a disagreement — not pervasiveness. Adverse here would be legally exposed overreach.",
            },
            {
              id: "disclaimer",
              label: "Disclaimer — the confirmation never arrived, so evidence was insufficient.",
              points: 2,
              feedback:
                "The alternative procedures (subsequent receipts, contracts, shipping docs) gave you enough evidence to quantify the misstatement — a disclaimer is for unobtainable evidence, and you obtained it. The problem is management's refusal to adjust, which is a known misstatement, not a scope limit.",
            },
          ],
        },
        {
          id: "rep-kam",
          prompt:
            "Which matters are Key Audit Matters (ISA 701) in the auditor's report, given the qualified opinion and the material-uncertainty paragraph?",
          options: [
            {
              id: "none",
              label: "None — the qualification already covers everything worth saying.",
              points: 0,
              feedback:
                "KAMs and opinion modifications answer different questions: KAMs describe the most judged areas of the audit, the opinion states conclusions. A qualified report normally still communicates KAMs.",
            },
            {
              id: "gc-only",
              label: "Only the going-concern material uncertainty — it is the biggest issue.",
              points: 2,
              feedback:
                "The MUM is disclosed in a dedicated paragraph and is NOT a KAM (ISA 701 excludes matters addressed in the MUM paragraph). KAMs must be drawn from the other significant-risk areas of this audit.",
            },
            {
              id: "rp-revenue-ecl",
              label: "Related-party export sales through Gulf FZE (including revenue cut-off) and the ECL valuation of export receivables; the going-concern situation is presented in the material-uncertainty paragraph, not as a KAM; a cross-reference ties the KAM section to the qualification.",
              points: 4,
              ideal: true,
              feedback:
                "Precisely. The two genuine judgment epicenters become KAMs; the going-concern disclosure lives in its own MUM paragraph per ISA 570/701; and the report reads as one coherent document rather than three competing sections.",
            },
            {
              id: "everything",
              label: "All significant risks as KAMs — inventory sites, sampling, confirmations, fraud risk.",
              points: 1,
              feedback:
                "KAMs are the few matters of most significance — listing every risk flattens the communication and buries the reader. Selectivity is the standard.",
            },
          ],
        },
        {
          id: "rep-free-text",
          prompt:
            "Draft, in no more than four sentences, the 'Basis for Qualified Opinion' paragraph for the receivables matter. Use the figures given; write it as it would appear in the report.",
          freeText: true,
          rubric:
            "A full-marks draft: (1) opens with the standard formula ('We have audited ... the accompanying financial statements ...'); (2) states the company has not provided for expected credit losses on export receivables — with the quantified effect: had the provision been made, receivables would decrease by 6.2m EGP and profit before tax by the same amount (with any deferred-tax nuance optional); (3) references the relevant framework (the financial statements do not present fairly ... in accordance with IFRS as adopted by the EAS/ Egyptian standards context); (4) states the qualification is material but not pervasive and therefore the opinion is qualified 'except for' the effects of the matter described. Award full marks for correct structure + both figures (6.2m, effect on receivables and PBT) + the except-for conclusion.",
        },
      ],
    },
  ],
}

export const SIM_SCENARIOS: SimScenario[] = [NILE_TEXTILES]

export function findScenario(slug: string): SimScenario | undefined {
  return SIM_SCENARIOS.find((s) => s.slug === slug)
}

/** Total points available across all decisions (choices + free text). */
export function scenarioMaxScore(scenario: SimScenario): number {
  return scenario.stages.reduce(
    (acc, st) =>
      acc +
      st.decisions.reduce((a, d) => {
        if (d.freeText) return a + 4
        const best = Math.max(...(d.options ?? []).map((o) => o.points))
        return a + (Number.isFinite(best) ? best : 0)
      }, 0),
    0
  )
}
