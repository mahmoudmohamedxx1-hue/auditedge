import type { TocQuestion } from "./types"

/** v37 — the universal CORE of every Test of Control questionnaire.
 *
 *  These 22 questions apply to any entity in any industry — they cover the
 *  COSO 2013 five components plus the IT/cyber layer auditors always test
 *  separately. Each industry questionnaire = this core + that industry's
 *  module. Answers to the core are shared across industries (the same
 *  core-07 answer follows the user from banking to bakeries), because the
 *  controls themselves are shared.
 *
 *  Written as manager-interview questions: direct, yes/no answerable, with
 *  a probe hint that tells the interviewer what a good answer sounds like. */
export const TOC_CORE_QUESTIONS: TocQuestion[] = [
  /* ---------- 1. Control environment ---------- */
  {
    id: "core-01",
    domain: "control-environment",
    q: "Has the board (or owner) approved and communicated a code of conduct that every employee acknowledges in writing?",
    hint: "Ask to see the acknowledgement log. Weak answer: 'it's in the employee handbook' with no signed evidence or no consequences for breaches.",
    weight: 2,
  },
  {
    id: "core-02",
    domain: "control-environment",
    q: "Is there a documented segregation-of-duties matrix that separates authorization, custody, recording and reconciliation — and is it kept current?",
    hint: "Probe who can both approve a payment AND record it, or both hold assets AND count them. One-person finance teams are acceptable only with compensating owner review.",
    weight: 3,
    critical: true,
  },
  {
    id: "core-03",
    domain: "control-environment",
    q: "Is the finance function led by a professionally qualified accountant with defined roles, deputies and documented handovers?",
    hint: "A single unbacked bookkeeper with no deputy = key-person risk. Ask who posts the journals when they are on leave.",
    weight: 2,
  },
  {
    id: "core-04",
    domain: "control-environment",
    q: "Are there controls specifically aimed at management override — e.g. all top-side and manual journal entries reviewed by someone independent of the preparer?",
    hint: "The fraud triangle starts at the top. Ask for the last three manual journals and who reviewed them. 'The owner approves his own entries' is a red flag.",
    weight: 3,
    critical: true,
  },

  /* ---------- 2. Risk assessment ---------- */
  {
    id: "core-05",
    domain: "risk-assessment",
    q: "Does the entity run a periodic risk assessment that covers operations, financial reporting, fraud, and IT — not just insurance/insurable risks?",
    hint: "Ask when the last exercise happened and to see the output. It must name financial-reporting and fraud risks, not only fire and liability.",
    weight: 2,
  },
  {
    id: "core-06",
    domain: "risk-assessment",
    q: "Is management override and employee fraud explicitly considered — with the fraud triangle (pressure, opportunity, rationalization) discussed with those charged with governance?",
    hint: "Probe who attended and what concrete anti-fraud actions came out. Annual boilerplate with no actions is a weak yes.",
    weight: 2,
  },
  {
    id: "core-07",
    domain: "risk-assessment",
    q: "Is there a live risk register with named owners, target dates, and follow-up when actions slip?",
    hint: "Ask for the register and pick one open action at random — chase its evidence. Unowned risks are unaudited risks.",
    weight: 1,
  },

  /* ---------- 3. Control activities ---------- */
  {
    id: "core-08",
    domain: "control-activities",
    q: "Is there an approval matrix — spending and contract thresholds mapped to named approvers — and is it enforced in practice, not just on paper?",
    hint: "Sample the last ten payments above the top threshold: does the signature/ system approval match the matrix? Deviations are common and telling.",
    weight: 3,
    critical: true,
  },
  {
    id: "core-09",
    domain: "control-activities",
    q: "Do bank mandates require dual authorization for payments, with limits, and are they updated promptly when signatories leave?",
    hint: "Stale mandates with departed signatories still able to pay is a classic finding. Ask for the mandate AND the last change request to the bank.",
    weight: 3,
    critical: true,
  },
  {
    id: "core-10",
    domain: "control-activities",
    q: "Are bank and cash accounts reconciled monthly, with the reconciliation reviewed and evidenced by someone independent of the preparer — and old items chased?",
    hint: "Ask for last month's reconciliation: is there a reviewer's mark, a date, and an aged-items list? Reconciliations the preparer 'reviews' themselves are not reconciliations.",
    weight: 3,
    critical: true,
  },
  {
    id: "core-11",
    domain: "control-activities",
    q: "Are manual journal entries restricted, fully supported, and approved before posting (with emergency/override routes logged and reviewed)?",
    hint: "Pull the journal listing, filter to manual entries, and trace three to support + approval. Round-sum, month-end, or rarely-used-user entries deserve extra attention.",
    weight: 3,
  },
  {
    id: "core-12",
    domain: "control-activities",
    q: "Is there a fixed-asset register that is physically verified against the assets on a cycle, with disposals approved and authorized?",
    hint: "Ask when the last count was and for the count sheet with variance sign-off. Assets 'written off' without approval paperwork is a theft channel.",
    weight: 2,
  },
  {
    id: "core-13",
    domain: "control-activities",
    q: "Are HR master-file changes (new hires, pay rates, leavers) independently approved outside the person who processes payroll — and reconciled to a headcount list?",
    hint: "Ghost employees live in the gap between HR and payroll. Ask who could add a fake employee tomorrow and what would stop them.",
    weight: 3,
  },

  /* ---------- 4. Information & communication ---------- */
  {
    id: "core-14",
    domain: "info-communication",
    q: "Is there a defined month-end close calendar with task owners, deadlines and a review of the resulting financials before release?",
    hint: "Ask for the calendar and whether the close slips habitually. Late, repeated 'final' versions of monthly numbers signal a weak close process.",
    weight: 2,
  },
  {
    id: "core-15",
    domain: "info-communication",
    q: "Do employees have current job descriptions and know their control responsibilities — and are policy acknowledgements tracked?",
    hint: "Pick two staff at random and ask what they are personally not allowed to do alone. If nobody knows, the policy binder is decorative.",
    weight: 1,
  },
  {
    id: "core-16",
    domain: "info-communication",
    q: "Is there a confidential whistle-blowing channel that reports to someone independent of management, and do staff know how to use it?",
    hint: "The best fraud findings arrive through this door. Probe whether staff trust it — a channel that routes to the person being reported on is theatre.",
    weight: 2,
  },

  /* ---------- 5. Monitoring ---------- */
  {
    id: "core-17",
    domain: "monitoring",
    q: "Does management review budget-vs-actual and key indicators regularly — with documented investigation of unexpected variances?",
    hint: "Ask for the last monthly pack and find one investigated variance with a conclusion. 'We look at it' without evidence of challenge is weak.",
    weight: 2,
  },
  {
    id: "core-18",
    domain: "monitoring",
    q: "Is there any ongoing monitoring of controls — an internal audit function, control self-assessments, or independent spot checks — on a defined plan?",
    hint: "Even a small entity can have the owner spot-check cash, approvals and stock. What matters is a plan, not size.",
    weight: 2,
  },
  {
    id: "core-19",
    domain: "monitoring",
    q: "When weaknesses are found (audit findings, incidents, errors), are they logged with owners and deadlines — and actually closed?",
    hint: "Ask for the findings tracker and count how many items are past their due date. Repeat findings across years mean closure is cosmetic.",
    weight: 2,
  },

  /* ---------- 6. IT & cyber ---------- */
  {
    id: "core-20",
    domain: "it-cyber",
    q: "Are system access rights granted on need, reviewed periodically against leavers and role changes, and revoked on the leaving day?",
    hint: "Ask for the last access review and the leavers list — cross-check that a departed employee cannot still log in today. Orphan accounts are the #1 hygiene failure.",
    weight: 3,
  },
  {
    id: "core-21",
    domain: "it-cyber",
    q: "Are backups of financial data taken automatically, stored off-site/off-platform, and — critically — restore-tested at least annually?",
    hint: "Everyone answers yes to backups; almost nobody has restore evidence. Ask for the last recovery test report and its date.",
    weight: 2,
  },
  {
    id: "core-22",
    domain: "it-cyber",
    q: "Are there basic cyber hygiene controls — patching schedule, endpoint protection, multi-factor authentication on financial systems, and phishing awareness for payment staff?",
    hint: "Payment-diversion fraud is the most common loss for SMEs. Probe what stops a fake 'CEO email' changing supplier bank details.",
    weight: 2,
  },
]

export const TOC_CORE_COUNT = TOC_CORE_QUESTIONS.length
