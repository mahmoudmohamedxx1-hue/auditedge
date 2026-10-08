# Changelog

All notable changes to AuditEdge Academy. Versions follow the app's internal
release history (each version shipped fully verified: `eslint` clean,
`tsc --noEmit` clean, production build green, automated suites passing).

## 40.1.0 — GLM 5.3 Flash + LLM7 as totally keyless providers

The site's main AI model — **GLM 5.3 Flash** — is now served by a **totally
keyless engine chain**: the REAL `GLM-5.3-Flash` model on **LLM7**
(api.llm7.io) leads every request on every deployment, with **no api key,
no signup, and no environment variables** — identical behavior in the
workspace and on a zero-config Vercel build (live-verified 2026-10-08:
LLM7's `/v1/models` and `/v1/chat/completions` authenticate with no auth
header, and the catalog lists the real `GLM-5.3-Flash` — 400k context,
reasoning, tools).

- **`llm7-glm` is the MAIN engine and fully keyless**: previously the LLM7
  GLM route sat behind an optional free key (`LLM7_API_KEY`) as a late
  failover; now it leads the chain for every AI feature, pinned to the
  live-verified model id `GLM-5.3-Flash`. An optional free LLM7 key, when
  set, is only attached as a bearer token to lift the per-IP daily token
  quota (dash.llm7.io) — it is never required.
- **Engine chain reordered — keyless first**: for the main model the chain
  is now `llm7-glm (keyless GLM-5.3-Flash on LLM7) → Z.ai SDK engine
  (keyless in-workspace failover) → the user's optional Z.ai key (a dormant
  booster) → the keyless community pool (Pollinations / LLM7 / Kilo /
  OVHcloud)`. Key-tier selections keep their key first, then get the
  keyless GLM route before the pool tail.
- **Quota-aware 429 handling**: LLM7 states its per-IP daily quota window
  inside the JSON body (`{"error":{"code":"quota_exceeded","retry_after":
  <seconds>}}`), not the `Retry-After` header. The pool layer now parses
  that body value and parks the engine for the stated window (capped at
  30 minutes) instead of burning in-request retries — the chain fails over
  to the SDK engine instantly, and the main route resumes automatically.
- **`/api/ai/status` probes the keyless main route**: reports `llm7`
  (LLM7's public model list is reachable AND still catalogues
  GLM-5.3-Flash — zero tokens burned), `workspace`, `key`, and the main
  model id. The DD customizer now shows its honest degraded-engine notice
  only when ALL routes are down — on a normal zero-config deploy the
  keyless main route is up, so users see nothing.
- **Honest keyless copy everywhere**: the DD engine hint, the model-picker
  note for GLM-5.3 Flash, the workspace notice, and the engine badges
  (`GLM-5.3 Flash · LLM7 keyless`) no longer push users to configure API
  keys — the site's promise is AI that works with zero setup, with the
  Z.ai SDK engine and an optional key as silent automatic failovers.

## 40.0.0 — GLM 5.3 Flash everywhere: the Z.ai SDK is the main model

The entire website now runs on **GLM 5.3 Flash** as its one main AI model,
carried by the **z-ai-web-dev-sdk engine** — every AI feature (tutor,
DD customizer, exam generator/marker, EQR, KAM, ToC, program tailor,
industry analyst, podcast, translate, sim, study plan) requests
`model: "glm-5.3-flash"` explicitly and follows one GLM-first engine chain.

- **Engine chain reordered — SDK is the MAIN**: the keyless Z.ai SDK engine
  leads every request (pinned to glm-5.3-flash on every call, zero setup),
  the user's Z.ai key serves the REAL `glm-5.3-flash` model on failover
  (verified live on the Z.ai Open Platform — previously the key mapped
  5.3-flash down to glm-4.7-flash), then LLM7's real `glm-5.3` route
  (free key), and the keyless community pool only as last-resort resilience.
- **Model registry is GLM-only**: the non-GLM community models (Kilo Auto,
  LLM7 Fast, Qwen3.5 397B) were removed from the picker — the site never
  presents a non-GLM model as a choice again. The pool engines remain
  internal failovers in the chain, honestly labelled when they serve.
- **`normalizeModelId()`** — every route that reads a client-sent model
  (chat, industry, toc-generate, dd-generate, program-tailor, kam) and both
  generation entry points coerce unknown/legacy pool-* ids back to the main
  model; stored legacy preferences migrate automatically on hydration.
- **ToC generator retry** re-rolls the main model (engine rotation happens
  inside the chain) instead of switching to the removed Qwen-397B route.
- **Honest engine badges**: "GLM engine · Z.ai SDK" (main), "Your Z.ai key
  · GLM", "GLM-5.3 · LLM7"; `/api/ai/status` pings the SDK engine with the
  pinned model and now also reports the main model id.
- **UI**: the model picker shows GLM-5.3 Flash as the "Main" model (keyless,
  Z.ai SDK first) plus the Z.ai-key GLM tier; the industry analyst's engine
  dropdown gained the matching Main badge.

## 39.0.2 — AI reliability pass (all AI sections audited)

A live battery of every AI endpoint (scripts/test-ai-battery*.ts) against the
running server, plus the Vercel deployment findings:

- **EQR reviewer fixed** — a partial engagement payload (missing
  `procedures`/`pbc`/`signoffs`) crashed the route with a 500; the boundary
  now defaults every record/array field before the bundle is built.
- **Keyless pool re-ordered by live health** (probed 2026-10-07): kilo now
  auth-walled, ovh now OAuth-walled, llm7 IP-quota-throttled — pollinations
  (alive) now leads the fallback chain on keyless deployments.
- **DD customizer self-heals** — one automatic retry with a firmer
  strict-JSON instruction when a small community engine returns prose or a
  thin answer, instead of surfacing a 502.
- **New `/api/ai/status`** — honest engine report (key configured?
  built-in engine alive?). The DD customizer shows an amber "community
  engines only — add ZAI_OPEN_API_KEY for reliable AI" notice on keyless
  deployments instead of a mystery failure.
- Battery results (workspace engine): dd-generate, chat, translate,
  industry, kam, program-tailor, exam-generate, toc-generate, tts, asr,
  podcast generate + speak, exam-mark — all healthy; podcast/speak requires
  2+ turns by design.

## 39.0.0 — Due Diligence: the Big-4 playbook, per account

A whole new section (`#/dd` in the sidebar, badge: 25) answering the deal
question: *before we buy, invest, lend, or partner — what must we examine,
and what could kill or reprice the deal?* Three scopes, one professional
structure, and the financial side built the way a DD team actually works —
**per account**.

### The playbook — 25 workstreams, 3 scopes

- **Legal (7)** — corporate standing & structure, material contracts,
  litigation & disputes, intellectual property, regulatory & licenses,
  employment & labor, real estate & title. Grounded in Egyptian law
  (Companies Law 159/1981, Civil Code 131/1948, IP Law 82/2002, Labor Law
  14/2025, Data Protection Law 151/2020) with IFRS/FRA touchpoints where a
  legal finding becomes a balance-sheet item.
- **Operational (6)** — organization & key people (the bus-factor test),
  operations & processes, IT systems & cybersecurity, supply chain &
  customers, QHSE, business continuity & risk.
- **Financial (12) — PER ACCOUNT.** One card per account workstream, every
  instruction for that account in one place, exactly how a diligence team
  staffs and reports: Revenue & Quality of Earnings (the QoE bridge),
  Customers & Trade Receivables (the clients example), Inventory, Cash &
  Bank, PP&E, Goodwill & Intangibles, Investments & Group, Suppliers &
  Payables, Borrowings & Debt-Like Items (the net-debt bridge), Equity &
  Related Parties, Payroll, Taxes.

Every workstream follows the same Big-4 structure: **why it matters on the
deal → analytics & ratios to run (financial accounts) → the information
request list → the step-by-step instructions → red flags** — with the
observations that can kill or reprice the deal flagged as **deal breakers**
(23 across the playbook). 212 field-ready instructions, 156 document
requests, 100 red flags, all bilingual EN/AR with real-framework references
only (no invented clause numbers — enforced by the test suite).

### The working tool

- **Tick your way through a real deal** — every instruction is a checklist
  item; progress persists per workstream (localStorage) with progress bars
  on every card; reset per section.
- **Markdown working-paper export** — one workstream or the whole scope,
  ticks included, ready for the deal file.
- **Search across both languages** — "litigation", "QoE", "الذمم" all land
  on the right workstream.
- **Deep links** — `#/dd?scope=financial`, `#/dd?section=receivables`,
  `#/dd?ai=1` (shareable, back/forward works).

### The AI customizer — any target, any deal

Describe the target and the deal — buy-side acquisition, minority
investment, lending, or partnership — plus what worries you.
`/api/ai/dd-generate` (rate-limited under the draft policy, session-gated)
has the AI write the **deal memo**, the focus areas, **extra field-ready
instructions dropped into the right playbook sections** (validated against
the real library, capped, bilingual) and extra information requests. Apply
a result and it **lives inside its workstreams**, marked as an AI
supplement — one playbook, tailored to the target. Saved customizations
(capped at 12) re-open, delete, and re-apply like the ToC AI generator.

### The strong base

The whole section is data-driven through one typed registry
(`src/lib/dd/`): scopes, sections, counts, and the search index all derive
from the data files — adding a workstream (or a whole scope) is a data-only
change; the view, the search, the AI validation and the test suite pick it
up automatically.

### Verification

- New suite `scripts/test-v39.ts` (60+ checks): library integrity (ids,
  codes, scope sizes), the content-depth bar (bilingual substance, ≥ 7
  instructions / ≥ 4 requests / ≥ 3 red flags per section, ≥ 70% refs,
  real-framework-only refs), the per-account financial shape (12 accounts,
  analytics on each), registry behavior (lookup + bilingual search), full
  wiring (view, deep links, sidebar, palette, i18n), the AI route's
  validation and caps, version lockstep.
- Repair pass: the previous session's release hygiene re-verified green
  (eslint, tsc, all 22 suites, DB health) and the junk-message local commit
  reworded; `e2e-v39.sh` adds the live browser pass.

## 38.0.0 — the resilience + depth release (all five v38 recommendations)

The state-of-project audit (v37) recommended five moves; this release ships
all five.

### 1. Auto-restore DB guard — no clone ever serves a silent empty app

`scripts/ensure-db.ts` — a fresh sandbox or clone boots with `db/custom.db`
as a ~274 KB empty skeleton while the real content ships inside
`prisma/auditedge-demo.db.gz` (19.6 MB — 2,685 questions, 41 courses, 990
lessons). Until now the restore was a manual step the audit itself tripped
over. The guard probes the DB (size fast-path, then bank/course counts),
restores the snapshot when thin, verifies the restore, and never touches a
Vercel deployment or a managed Postgres. Wired as `predev` (so
`bun run dev` self-heals), as `ensure:db`, and directly inside
`scripts/dev-clean.sh` for direct boots.

### 2. ICQ PDF export — the questionnaire goes to the field

The Test of Control runner gains two print actions (hidden-iframe print
engine, popup-blocker safe, zero new dependencies):

- **Print blank ICQ (PDF)** — from the run stage: an A4 fieldwork copy with
  Yes/No/N.A. tick-boxes, a notes column, entity/auditor/respondent/date
  signature strip, to be completed by hand during the management interview.
- **Print report (PDF)** — from the results stage: answers marked, verdict
  banner + weighted score, component scores, critical failures, gaps and the
  corroborating procedures.

Fully bilingual: the Arabic questionnaire renders complete RTL
(`dir="rtl"` + Arabic labels). All questionnaire text — including
AI-generated content — is HTML-escaped.

### 3. AI retry/backoff — 429 rate-limits no longer eat requests

The audit observed the live keyless pool eating 429s. Three layers now
protect every engine (new `src/lib/backoff.ts`, pure and unit-tested):

- **Per-engine cooldown** — an engine that just rate-limited is parked
  (default 60 s, or its own `Retry-After`), and the chain fails over to the
  next engine instead of hammering it.
- **Retry-After awareness** — seconds and HTTP-date forms both parsed, and
  the server's own number always overrides our schedule.
- **Exponential backoff with jitter** — 900 ms → 1.8 s → 3.6 s ± 30%, so
  concurrent requests never retry in lockstep; in-request waits are capped at
  4 s, longer waits become cooldowns.

Both pool call paths (streaming + once) and the user-key engine
(`callUserKey`) now share the same math.

### 4. IFRS 16 rewritten to the flagship depth — the second flagship

`IFRS 16 Leases` rebuilt to the depth bar the IFRS 15 notes PDF set:
**98 blocks** (63 → 98), 5,859 English words with 87% Arabic parity, 460
figures, 13 journal sets with 87% of rows carrying amounts, 12 worked
numeric examples, 14 exam tips. One running case (Delta Co — 4-year
office-floor lease, 50,000 in arrears, IBR 6%) now flows through the whole
lessee engine: day-one measurement → unwinding schedule → SFP extracts with
the current/non-current split → CPI remeasurement → term extension at a
revised rate → scope-decrease gain → impairment → the EBITDA / cash-flow
split. The lessor side gets its own net-investment schedule and the running
case's mirror (the landlord's books). New sections: embedded leases, the
in/out lease-payments list, inception vs commencement, IFRS 16 vs IAS 17
before/after, the four-line engine quick reference, and the five-move exam
method. Flagship badge lit, sorted beside IFRS 15.

### 5. ToC → audit-program bridge + Arabic course verification

- **Bridge**: the ToC results view gains *Tailor the audit program* — it
  carries the entity, its case, and the live control verdict (including the
  gaps management admitted) into the AI program customizer, which opens
  pre-filled. One flow: interview → verdict → tailored program.
- **Arabic Academy verified**: 22 courses, distinct order values, every
  course carrying its icon/accent cover and published — plus a live
  production browser pass in `e2e-v38.sh`.

### Battery

`scripts/test-v38.ts` (85 checks) joins the chain: guard wiring + live run,
backoff unit tests, cooldown lifecycle, ICQ print builder (escaping, RTL,
verdict), 17 new i18n keys EN+AR, bridge wiring, the IFRS 16 depth bar,
Arabic course checks, version lockstep. `scripts/e2e-v38.sh` adds the
browser pass: blank print dialog, results print, the bridge navigation, and
the Arabic courses page.

## 37.0.0 — Test of Control: interview any industry's managers, get the verdict

### The new section

A whole new view (`#/toc` in the sidebar, badge: 45) answering one fieldwork
question: *can this firm's control environment be relied upon?* The auditor
interviews the managers with a tailored internal-control questionnaire (ICQ),
records their yes / no / not-applicable answers, and the app computes the
verdict — **strong, moderate or weak** — mapped straight to the ISA 315/330
strategy choice (reliance on controls, a mixed approach, or fully substantive
testing).

### The industry library — 45 industries, 10 sectors, 492 questions

- **Ten sectors**: Primary & Extractive, Manufacturing, Energy & Utilities,
  Construction & Real Estate, Transport & Logistics, Retail & Wholesale,
  Financial Services, Technology & Media, Services, Public Sector & Non-Profit.
- **45 tailored industry modules** — from agriculture, fishing, forestry,
  mining and oil & gas through banking, Islamic banking, insurance, crypto
  exchanges, data centers and SaaS to healthcare, hotels, restaurants,
  professional services, government, NGOs and awqaf — each carrying 10-12
  industry-specific manager-interview questions with probe hints ("what a
  good answer sounds like"), significance weights (1-3) and critical-control
  flags, plus 5-8 recommended tests of controls (inquiry / inspection /
  observation / reperformance).
- **A universal 22-question core** opens every questionnaire — the COSO 2013
  five components plus the IT & cyber general controls — so no entity ever
  skips the fundamentals. Answers persist per entity (two firms in two
  industries are two different control environments).
- **The verdict engine**: weighted yes/no scoring with N/A excluded from the
  denominator; per-component (domain) scores; keystone controls flagged
  critical where a single "no" overrides the aggregate — Strong needs ≥80%
  with zero critical failures, Moderate ≥50% with at most two, anything else
  is Weak. Results page: verdict banner, domain score bars, critical-failure
  red flags, the full gap list with remediation hints, and the corroborating
  procedures. One click exports the whole ICQ as a Markdown working paper.
- **Search + sector filter + progress badges** (in progress / assessed) on
  every industry card; deep links `#/toc?ind=banking` open a questionnaire
  directly; `#/toc?ai=1` opens the AI tab.

### The AI generator — any industry on earth, and its case

Not finding your industry? Describe it — however niche (date packing &
export, ride-hailing, a poultry feed mill) — plus the case: size, systems,
countries, what worries you. `/api/ai/toc-generate` (rate-limited under the
draft policy, session-gated) has the AI design a complete questionnaire —
all six COSO domains, weights, criticals, probe hints — plus corroborating
procedures, in English or Arabic to match the interface. The reply is forced
to JSON and hardened through a normalizer (fence-stripping, domain
near-miss mapping, weight clamping, id de-duplication) with a second
attempt on drift, so the client always receives a structurally valid
questionnaire that runs through the same scoring and verdict engine.
Generated questionnaires are saved to "My AI questionnaires" (local,
capped at 12) with re-open, delete and regenerate.

### Verification

- New suite `scripts/test-v37.ts` (90 checks): library integrity (ids,
  weights, domains, substance), scoring-engine unit tests (boundaries,
  N/A exclusion, the critical-override rule), normalizer unit tests
  (messy-LLM extraction, near-misses, rejections), wiring greps, route
  guards, version lockstep — wired into the `bun run test` chain.
- `test-v36.ts` made forward-compatible (major ≥ 36) as v34 was before it.
- Full battery green: `tsc --noEmit` clean, `eslint` clean, all 22 suites
  pass, browser e2e (`scripts/e2e-v37.sh`) green, live verification on
  Vercel after push.

## 36.0.0 — IFRS 15 rewritten to the true depth of the notes PDF

### The verdict that drove this release

The user compared the app's IFRS 15 summary against their 12-page
handwritten notes PDF and found it wanting — and the numbers agreed:
the shipped summary was 1,746 English words across 17 topics with a
single worked example. The v31/v32 "depth bar" had counted *blocks*;
blocks ≠ comprehensiveness. The flagship is now rewritten to the real
benchmark:

- **4,075 English words** (2.3×) with full Arabic parity — 25
  red-asterisk topics at ~163 words each.
- **A running worked case (Nile Co)** threaded through all five steps:
  a 132,000 bundled contract (machine + installation + 2-year
  maintenance) whose SSP allocation (91,667 / 18,333 / 22,000),
  recognition entries and contract balances are all carried with
  consistent numbers.
- **14 journal sets / 27 T-account rows** — 24 of them carrying real
  amounts (deposits, rebates, financing unwinding, construction
  cost-to-cost, warranty bundles, agency commissions, repurchase
  financings, right-of-return, loyalty points).
- **14 worked numeric examples**, including a full three-year
  construction contract (5,000 price / 4,000 cost) with year-by-year
  revenue, and the two-year interest-free credit at 10%.
- **The sections a complete set of DipIFR notes must carry**, previously
  missing: variable consideration & the constraint as its own topic,
  the significant financing component, non-cash consideration &
  consideration payable to the customer, licensing (functional vs
  symbolic IP), contract modifications (new contract / blend / catch-up),
  presentation & disclosure, and transition & exam focus.
- **A new depth bar that measures the right things** —
  `scripts/test-v36.ts` (45 checks) enforces words, topics, amount-
  carrying journal rows and worked examples, so the bar can no longer
  be satisfied structurally. Every other standard keeps the v32 floor
  (≥ 45 blocks) until its own true-depth rewrite lands.

### Housekeeping

- test-v30's flagship formula check generalised to all formula blocks
  (the flagship now carries two); test-v35 made forward-compatible
  (major ≥ 35) like v34 before it.
- `scripts/measure-ifrs15.ts` — the depth audit used to compare any
  standard against the notes-PDF benchmark.

Verified: `tsc` clean, `eslint` clean, full chain green (v20–v36 +
sectors/engagement/analyzer/models), and an 11/11 live headless pass
(running case, allocation figures, all new topics, 14 journal tables,
v36 badge).

## 35.0.0 — The exams open INSIDE the website + the v-release badge

### 1. Every Sameh Zidan paper now opens in the app — not on his site

v34 pointed the DipIFR archive at the author's CDN. v35 mirrors the
papers into the app itself and opens them in a built-in reader, so the
learner never leaves the website:

- **30 files mirrored into `public/exams/dipifr/` (33 MB)**: all 26 real
  sitting papers (June 2013 → December 2025, the June 2025 answered copy
  included), the combined Jun 2013–Dec 2024 archive, the Q4 multi-topic
  bank, the exam-questions index, and the EN↔AR all-standards glossary.
  Downloaded from the author's public CDN with attribution kept on the
  panel (`scripts/fetch-dip-exams.sh` re-runs the mirror).
- **A new in-app exam viewer** (`exam-viewer.tsx`): PDFs render in a
  same-origin iframe — the browser's own zoom, search and page chrome —
  inside an accessible Dialog (ESC + focus management). Header actions:
  download the self-hosted file, or fall back to the CDN original.
  Spreadsheets get a download card (they can't preview in-browser).
- The sitting chips and hosted companion cards are now **buttons that
  open the viewer**; nothing navigates away from the app anymore.
- The five files too heavy to mirror stay **clearly-labelled external
  downloads with their sizes**: the three examiner xlsx workbooks
  (24/17/16 MB), the BPP Exam Practice Kit (46 MB) and the BPP Study
  Text (103 MB — above git's 100 MB per-file limit).
- `X-Frame-Options: SAMEORIGIN` (already set app-wide) keeps the
  same-origin PDF iframe working while blocking clickjacking.

### 2. The sidebar release badge — "is the site updated?" at a glance

- A small **v-number badge** now sits at the bottom of the sidebar
  (shows the major, e.g. `v35`; collapses gracefully with the sidebar).
- Its value is inlined at build time from **package.json** via
  `next.config.ts` (`NEXT_PUBLIC_APP_VERSION`) — one source of truth,
  kept in lockstep with the service-worker stamp by `scripts/test-v35.ts`.
- If the badge is behind the changelog, one refresh picks up the new
  build (the v34 SW self-heal auto-reloads once the worker updates).

### 3. Fixes carried in this release

- `scripts/e2e-v35.sh`: staged browser navigation (root → shell → hash
  route) after a freshly-launched browser was seen dropping a direct
  hash-URL open, plus a robust `.next` clean retry in the dev boot.
- `scripts/test-v34.ts` made forward-compatible (major ≥ 34 instead of
  pinning 34.0.0) so the chain stays green as the archive ships forward.

Verified: `tsc` clean, `eslint` clean, full chain green (v20–v35 +
sectors/engagement/analyzer/models — incl. the new 43-check test-v35),
and a live 10/10 headless pass: the app serves the mirrored PDF
(application/pdf), the December 2024 chip opens the self-hosted iframe,
ESC closes, June 2025 opens with its answered badge, external sizes
(103 MB / 46 MB) and "Opens in-app" labels all render. The live Vercel
deployment was also re-verified in a fresh browser: IFRS 15 deep link
serves all six journal T-account tables.

## 34.0.0 — The REAL DipIFR past papers (2013–2025) + SW self-heal

### 1. Every actual DipIFR exam paper, straight from the examiner

The Exam Center's "IFRS diploma — DipIFR style" shelf always served
ADAPTED papers from the question bank. It now also carries **the real
thing**: a new archive panel (sourced from Sameh Zidan / efham IFRS
Academy's public course-resources page) with:

- **26 actual sitting papers** — June + December of every year from 2013
  to 2025, each a direct PDF (opens in a new tab). June 2025 is the
  answered copy and is badged as such.
- The real exam's shape stated up-front: 4 questions × 25 marks · 3
  hours · Q1 is always a consolidation (SOFP or SOPL).
- A **companion shelf** of 9 resources: the combined Jun 2013–Dec 2024
  archive PDF, the examiner question workbooks (Dec 2019–June 2025 and
  2015–June 2019 — every Q1–Q4 transcribed with trial balances), the
  consolidation bank tagged SOFP-vs-SOPL per sitting (Jun 2015–Dec 2025),
  the Q4 multi-topic bank, the exam-questions index, the BPP Study Text
  and Exam Practice Kit for the Dec 2026 / Jun 2027 sittings, and the
  EN↔AR all-standards terms glossary.
- Source attribution on the panel links to the author's page; every one
  of the 35 links was verified live (HTTP 200) before shipping.
- Fully bilingual (EN/AR), `dir="auto"` on every label, opens in new
  tabs with `rel="noopener noreferrer"`.

Data lives in `src/lib/dipifr-archive.ts`; the panel is
`src/components/audit/dip-archive.tsx`, mounted under the IFRS diploma
group in the Exam Center (`exam-center.tsx`). Years collapse to the
newest five with a "Show every year" expander.

### 2. The service worker now self-heals stale pages

v33 fixed the frozen cache stamp; v34 closes the other half of that
incident: if a new worker takes control while a page is open
(`skipWaiting` + `clients.claim`), the page now reloads itself once
(`controllerchange` guard in `pwa.tsx`, only on real updates, at most
once per page life) — an open tab can no longer keep running an old
shell against fresh caches.

### 3. Sandbox-restore recovery (no user-visible change)

Mid-build the workspace snapshot-restored the tree back to the v27
baseline. Re-synced to origin/main (v33), re-applied this release's
edits on the correct base, purged stray download artifacts from the
repo root, and re-seeded the local DB (bank 2,685 · 41 courses · 990
lessons) via `scripts/restore-local-db.ts`.

Verified: `tsc` clean, `eslint` clean, new `test-v34.ts` 48/48 (wired
into the `test` chain), full battery green, and a live browser pass —
panel renders 19 links collapsed / 35 expanded, 2013–2025 all present,
"with answers" badge, EN and AR both verified on a booted dev server.

## 33.0.0 — Stale-cache fix: every browser now sees the v30–v32 Summaries

**What happened:** the IFRS Summaries (all 41 standards at the full
12-page PDF depth, 2,079 revision blocks) shipped in v30–v32, but a small
subset of visitors kept seeing the old pre-Summaries app. Root cause: the
service worker's cache stamp (`auditedge-v27`) was never bumped after v27.
When the preview server was unreachable (the sandbox sleeps and kills
processes between sessions), the SW fell back to its cached app shell —
which was still the **v27** build, i.e. the app exactly as it was *before*
the Summaries section existed.

**The fix:**

- `public/sw.js` cache stamp bumped `auditedge-v27` → `auditedge-v33`.
  The moment any browser fetches the new worker, its `activate` handler
  deletes every cache that doesn't start with the new stamp — the stale
  v27 shell, data and asset caches are dropped automatically, and the
  offline fallback shell becomes the current app instead of v27.
- Navigations were already network-first; with the stamp fixed, the
  offline fallback can no longer masquerade as the live app for six
  versions.
- Dev server rebooted and the Summaries verified live (boot 200, sidebar
  → IFRS Summaries → all 41 standards render with journal entries,
  decision trees, formula panels and EN/AR toggle).

If your browser still shows the old app after this release: hard-refresh
once (Ctrl/Cmd+Shift+R) or open DevTools → Application → Service Workers →
Unregister — you will then get v33 and it will stick.

## 32.0.0 — Shareable deep links + every IFRS summary at the FULL 12-page depth

Two headline deliveries:

### 1. Every page of the app can now be shared by its URL

The app gained hash-based deep links (`src/lib/deeplink.ts`): every view —
and every *selection inside a view* — lives at its own address, so copying
the link and sending it to a friend opens **the exact same page**:

- `#/course/<id>` a course · `#/lesson/<id>?c=<courseId>` a lesson ·
  `#/quiz/<id>?c=<id>` its quiz · `#/studio/course/<id>` the builder
- `#/ifrs?std=IFRS+9` one IFRS sheet · `#/exam?paper=cpa-far` one exam
  family's paper picker · `#/sectors?sector=insurance` one sector ·
  `#/courses?video=<id>` one video course player
- every other view: `#/ai`, `#/library`, `#/program`, `#/review`,
  `#/simulation`, `#/podcast`, `#/analytics`, `#/achievements`, …

The shell records every in-app navigation (view changes **push** a history
entry so the browser back-button walks the app; id-only changes replace),
and `popstate`/`hashchange` re-navigate — including the component-owned
params (`?std` / `?paper` / `?sector` / `?video`), which are **preserved
through the rewrite** when a visitor who is already inside the app opens a
shared link (the `hashForRoutePreserving` machinery + `PARAM_OWNERS` map).

**Share buttons everywhere:** a global share button in the mobile top bar
and the desktop sidebar footer, a labeled Share on every course detail, a
share on the lesson progress line, a Share beside Print on every IFRS sheet,
a per-family share on every exam card (`#/exam?paper=…`), a share inside the
video-course player, and a **Ctrl+K palette action** "Copy link to this
page". Mobile uses the native share sheet (`navigator.share`), desktop
copies to the clipboard with a confirmation toast. Dead shared links
(deleted course/lesson) land on a friendly not-found card — never a blank
page.

### 2. The IFRS Summaries rewritten to the FULL depth of the 12-page PDF

The user's bar: "more and more comprehensive, just the same as the pdf … it
was about ifrs 15 and it was 12 pages". v31 averaged 20 blocks per standard
against the flagship's 64. **v32 lifts every one of the 41 standards to
45–64 blocks** — the catalog grew from **821 to 2,079 revision blocks**
(2.5×), average **50.7** per standard, shallowest 45 (IFRS 15 = 64, IFRS 9 =
64):

- **138 decision trees** (was 73) with red-ink accounting answers
- **144 T-account journal sets** (was 40) covering each standard's full
  lifecycle — initial recognition → subsequent measurement → derecognition
- **103 worked numeric examples** (was 36) with arithmetic that ties
- **54 formula panels**, **156 exam tips**, **129 bilingual margin notes**

Every sheet now carries the PDF's full section rhythm: objective, scope &
exclusions (naming the standard that covers each exclusion), key
definitions, recognition machinery with decision trees, measurement with
formulas, journals at each lifecycle event, worked examples, the classic
exam traps, disclosure essentials, transition & effective dates, and
interactions with the other standards. Content quality notes: IAS 1 teaches
the 2024 covenant amendment; IFRS 9 runs the full 3-stage ECL engine;
IFRS 16 carries the sale-and-leaseback gain cap; IAS 36 the CGU allocation
with the goodwill gross-up; IFRS 3 both NCI measurements and the
measurement-period discipline; IAS 33 basic + diluted EPS with the rights
issue bonus factor; IAS 26/28 the plan/equity-method machinery.

The per-standard depth checker ships with the repo
(`bun scripts/check-ifrs-file.ts "IFRS 9"`), and **test-v32** (57 checks)
locks the bar in permanently: no standard below 45 blocks, ≥ 10 headings,
≥ 10 paragraphs, ≥ 3 trees, ≥ 2 journals in every sheet, full bilingual
integrity, plus the deep-link parse/encode round-trips and wiring checks.

## 31.0.0 — Every summary written to the depth of the sample PDF

**The user's verdict on v30: the summaries must be "more comprehensive, just
the same as the pdf".** v30 shipped the other 40 standards at 5–13 blocks
each while the flagship (mirroring the 12-page IFRS 15 notes PDF) carried 64.
v31 closes that gap: **every one of the 41 standards was rewritten to the
depth bar of the PDF** — the catalog grew from **328 to 821 revision blocks**
(2.5×), with no standard below 13 blocks and an average of 20.

**What every sheet now carries** (the PDF's device set, standard by
standard): red-asterisk section headings (4–9 per sheet), dense principle
paragraphs, numbered models (five-step / PIRATE / acquisition method /
three-element control), **73 decision trees** (up from 33) with red-ink
accounting answers, **40 T-account journal sets** (up from 11) covering
initial recognition, subsequent measurement, derecognition and the classic
exam entries, 41 formula panels, 36 worked numeric examples, 80+ exam tips
and Arabic margin annotations in the other language exactly like the notes.
The exam big-hitters went deepest: IFRS 9 (the SPPI + business-model
classification, the 3-stage ECL model, POCI, derecognition, hedge
accounting), IFRS 16 (the lease-identification test, the lessee engine,
modifications, lessor classification, sale & leaseback with the gain-
recognition cap), IAS 36 (VIU vs FVLCD, the CGU allocation with per-asset
floors, the goodwill gross-up, the reversal wall), IAS 12 (tax bases, the
initial-recognition exceptions, the IFRS 3 interplay), IAS 19 (the
four-category split, the DB engine's P&L/OCI geography, settlements &
curtailments), IFRS 3 (the goodwill equation both ways, contingent
liabilities overriding IAS 37, step acquisitions, reverse acquisitions),
IFRS 10 (power/exposure/linkage, de facto control, the loss-of-control
cascade, investment entities) and IAS 33 (basic & diluted EPS with the
full treasury-method and rights-issue bonus-factor worked examples).

**A per-standard architecture.** The six monolithic data files became thin
arrays over `src/lib/ifrs/standards/` — **41 files, one per standard** — so
any sheet can be deepened independently without touching a 4,000-line
monolith. The flagship lives at `standards/ifrs-15.ts` unchanged (it IS the
reference); the other 40 were authored fresh, bilingual throughout, with
Arabic-Indic numerals in the Arabic text and the same CAPS-emphasis style
the notes use.

**The comprehensiveness is now visible.** The hub header carries a catalog
totals strip (41 standards · 821 revision blocks · 73 trees · 40 journal
sets · 36 worked examples); every card shows depth chips (sections · trees ·
journals · formulas) before you open it; and the sheet view tops the paper
with per-standard device chips. 44 new checks in `test-v31.ts` enforce the
bar permanently (per-standard minimums, major-standard floors, the 750+
block catalog total, bilingual integrity of every string, the stats helpers
and the UI chips) — wired into the main suite, which now totals 44 checks
for this section alone.

## 30.0.0 — The IFRS Summaries release

**A new section: IFRS Summaries.** The user shared their handwritten IFRS 15
notes PDF and asked for a section that builds every standard's summary "like
that pdf style and structure … so make for all standards". The result is a
dedicated sidebar section rendering **all 41 effective IFRS & IAS standards**
as bilingual handwritten study-notes sheets — a faithful web rendition of the
notes aesthetic: cream ruled notebook paper with light-blue rules and a red
margin line, **Caveat** cursive for the English ink and **Aref Ruqaa** (the
everyday Arabic handwriting style) for the Arabic, two inks (graphite body +
red pen for the `* asterisk *` headings, outcomes and numbers), hand-drawn
wobble boxes with arrows, DR/CR T-accounts, formula lines and red
wavy-underlined exam tips. In dark mode the paper tones down to a
late-night-desk sheet. Every sheet prints cleanly to PDF with the ruling
intact.

**The flagship mirrors the sample PDF section for section.** IFRS 15 —
Revenue from Contracts with Customers is the deepest summary (64 blocks):
core principle → objective → the five-step model → each step's detail
(the contract criteria, distinct performance obligations, transaction
price & the constraint, allocation & standalone selling prices, over-time
vs point-in-time) → contract-cost decision trees → warranty → principal
vs agent with gross/net T-accounts → bill-and-hold → the repurchase
decision tree (financing vs lease) → consignment → sale with a right of
return (both journal sets) → customer options → the percentage-of-
completion formulas with a worked example → contract asset vs contract
liability. The other 40 standards each carry 5–13 blocks of the same
devices — 33 decision trees, 11 T-account journals, 14 formula panels and
39 exam tips across the catalog, grouped into six topics (Presentation &
Policies · Assets · Revenue & Liabilities · Financial Instruments ·
Groups & Investments · Specialized & Other).

**Bilingual by construction, like the notes.** Every string is an EN/AR
pair following the site-wide toggle: in English mode the body is cursive
English with **Arabic margin annotations** beside it (faded, red-lined —
exactly like the PDF's handwritten Arabic notes), and in Arabic mode the
ink flips: ruqaa-Arabic body with English margin annotations. The hub
carries a search box (codes + both titles + topic, "15", "lease" and
"المخزون" all work), topic filter chips with counts, and each card shows
a ruled-paper strip preview with the standard code in handwriting. Sheets
open with prev/next navigation through the catalog, a margin-notes toggle
and a print action.

**Verified end-to-end in the browser**: the sidebar item ("IFRS Summaries
41") between Exam Center and Review, the hub chips (8/8/6/5/6/8 per
topic), the flagship sheet rendering 25 tree boxes + 6 T-accounts on the
ruled paper, the Arabic flip (RTL sheet with English margin notes, 144
ruqaa elements), and prev/next to IFRS 16 — no console errors, and a
vision-model review confirmed the paper/ink aesthetic with no visual
defects in both languages. 67 new checks in `scripts/test-v30.ts` guard
the catalog integrity, the PDF-mirroring of the flagship, bilingual
coverage of every block string, the search, the wiring and the styling.

## 29.0.0 — The YouTube-first catalog + exams-hub-upgrade release

**YouTube courses now open the Courses page.** The user asked for the
richest cards first — "put youtube courses first as there are courses that
don't have thumbnails" — so the **full video courses** section (the in-app
playable YouTube catalog with real thumbnails) now leads the page, the
**Arabic Academy** (all 20+ complete Arabic playlist courses, every card
showing its source video's own artwork) sits directly underneath, and the
**Core curriculum** — whose programs carry designed covers rather than
video thumbnails for now — follows after. Inside each catalog section,
courses with a playable video sort above thumbnail-less ones, so a real
thumbnail can never hide below a plain cover again. The top search box now
filters the whole page too: it always drove the DB catalog, and it now
matches the video-course catalog (title / channel / description, English
and Arabic — "excel" or "مراجعة" both work) and the free-course catalog,
so nothing on the page is unsearchable.

**The Exam Center got the upgrade its content deserved.** The real
qualification papers — the heart of the section — now **lead the hub**
instead of sitting below the generic mock cards: right under the header
comes a **performance overview strip** with the learner's own numbers
(completed sittings, average score, best score, pass rate at 50%+),
then the full papers catalog, then the quick practice & mock tools below.
The papers catalog gained **one-tap qualification filter chips** (All ·
IFRS · ACCA · CPA · CFA · CMA · Egyptian practice, each with its family
count, ACCA folding its three syllabus levels into one chip), and every
family card now shows **the five sittings at a glance** — a Flagship chip
plus the four dated years (June 2024 · Sept 2023 · June 2022 · Dec 2021) —
so the five-papers-per-exam promise is visible before the picker even
opens, alongside a per-family badge with the learner's attempts and best
score once they've sat that exam. The hub widened to match the richer
grid. Verified end-to-end in the browser: courses order (video → academy →
core), 22 live YouTube thumbnails in the academy section, the CPA filter,
the flagship + year chips, and the paper picker still opening the
real-exam blueprint with all five sittings.

## 28.0.0 — The exam-opening fix + AI program customizer release

**The paper exams open again — and never break on a stale database again.**
Two independent defects made v27's real-format sittings fail to open: (1)
the deployed demo snapshot predated v27's schema, so writing
`ExamSession.sections / written / crMarks / crStatus` threw a Prisma "column
does not exist" error and every paper sitting POST returned a silent 500;
(2) the sitting response omitted its `crTasks` payload, so beginning a
written (CR) section rendered a blank screen. Both are fixed at the root:
the **database layer now self-heals** — on boot it inspects the live SQLite
file (`PRAGMA table_info`) and adds any missing columns with idempotent
`ALTER TABLE` migrations, awaited ahead of the first DB query so nothing
races; the paper POST now ships its constructed-response tasks inline
(certified solutions still hidden until submit), same shape as the resume
route; and the **shipped Vercel snapshot was regenerated** on the current
schema so fresh deploys are correct from the first request. Verified
end-to-end: pick a paper → sit Section A → answer the scenario tasks →
submit → the AI examiner marks against the certified solutions with
per-requirement feedback.

**The Courses page leads with the curriculum and the Arabic Academy finally
sits where you can find it.** The workspace's own programs (ISA / IFRS /
Egyptian framework) now headline the page as the **Core curriculum**, and
the supplementary Arabic playlist courses — Mahmoud Hamouda's Auditing
Standards in Practice, the ISA series, the IFRS diplomas, and their 30+
siblings that used to sink to the very bottom of the page — moved UP into
their own headed **"Arabic Academy — full playlist courses"** section
directly underneath. Every course backed by a playable YouTube lesson now
shows the **real video thumbnail** on its card (layered over the designed
cover so a failed image load degrades gracefully), with a video badge; the
search and category filter drive both sections.

**AI in the Audit Program: describe the client, get a tailored program.**
The new **AI program customizer** (`Customize with AI` in the Audit Program
header) asks for the client profile — industry (any of the 20 built-in
sectors or free text), entity size, FRA-listed status, ERP systems, and the
specific concerns on your mind — and the `/api/ai/program-tailor` route has
the AI draft a tailored supplement grounded in the ISAs, the Egyptian
standards and IFRS/EAS: an **engagement memo**, 3-6 **focus areas**, 10-16
**extra tickable procedures** validated against the real program sections
(capped 4 per section, bilingual, standard-referenced), and 2-5 extra **PBC
requests**. Applying it drops the procedures straight into the right
sections — tickable, N/A-able and individually removable exactly like
built-ins, counted in every progress bar — the PBC requests ride into the
PBC tracker and its CSV export, and the memo card (with the engine that
drafted it) tops the program until you re-tailor or remove it. The route
survives engine hiccups gracefully and the client shows the error with a
retry.

**Sector Risks now feed the engagement.** Every sector profile carries a
**risk-heat chip row** (significant accounts · inherent risks · fraud red
flags · minefields · tailored procedures · KAMs · ratios at a glance), and
the new **"Use in my audit program"** button links that sector to the
active engagement — one click from the sector page to a program whose risk
view, KAM seeds and AI customizer prefill all know the client's industry.

**Also in this release:** `db.ts` gained a `dbReady` promise consumed by
`getSessionUser()` so the additive self-heal always completes before any
write; dev Prisma logging quieted to errors-only; the v28 test battery
(31 checks — snapshot schema, live-DB heal, paper POST completeness,
thumbnail parsing, the customizer data model, the tailor API contract, and
v28 i18n coverage) is wired into the main suite (1,461+ checks total).

## 27.0.0 — The real-exam-structure + AI-examiner + paper-picker + Excel/Word release

**Exams structured like the REAL thing — testlets, sections and simulations,
not flat MCQ lists.** Eleven exam families now carry their real exam's
blueprint. The **CPA papers** (AUD / FAR / REG) sit as two multiple-choice
testlets plus a **task-based simulation testlet, scored 50/50 exactly like
the real CPA exam**; the **IFRS diploma** and **ACCA FR** run Section A
(objective tests, 30%) into **Section B scenario questions (70%)**;
**ACCA AA** keeps its three sections (OT / case / constructed response);
**SBL and SBR** become the pure scenario papers they really are; **CMA
Parts 1 & 2** split into the 75% multiple-choice screen and the 25% essay
scenarios; and **CFA Level I** gains its two-session morning/afternoon
shape. The sitting itself is now section-by-section — a section landing
screen ("Testlet 2 — 12 questions, 25% of your score"), per-section
navigators, and real exam notes explaining how each part is marked.
Task-based simulations and scenario questions are **written answers**:
an exhibit panel with the case, numeric-entry and free-text requirements,
each with its marks and an autosave.

**The AI examiner marks your written answers against the CERTIFIED
SOLUTIONS.** Every one of the 35 authored tasks (81 requirements — CPA
TBS, DipIFR/FR Section B, AA Section C, SBL/SBR case tasks, CMA essays)
carries the examiner's guide: the certified solution, the marking points
and per-requirement marks. On submit, the new `/api/ai/exam-mark` route
feeds each answer with its certified solution to the AI, which awards
marks and writes feedback exactly like a professional marker; a
deterministic keyword-and-numeric-tolerance fallback marks the same
requirements if the AI is unreachable, so a submitted paper never hangs.
The final score is the real-exam blend — section percentages weighted by
the official weightings (CPA 50% MCQ / 50% TBS, DipIFR 30/70, CMA 75/25).
The results screen shows your answers beside the marks awarded, the
examiner feedback, and the certified solutions revealed for review.

**A separate popup per exam to choose between the previous papers.** Every
exam family card now opens a picker dialog listing its whole shelf — the
flagship paper plus the four dated sittings (June 2024, Sept 2023, June
2022, Dec 2021) — each with its question count, duration and real-format
note, under a panel that spells out the real exam's blueprint. Dated
sittings also **rotate their written tasks**, so each year meets fresh
scenario questions.

**Advanced Excel and Word join the catalog — in Arabic AND English.** The
new Office shelf: Mohamed Al Assaal's complete 67-episode Arabic Excel
course (~11.7h), TrumpExcel's famous FREE Excel course Basic→Advanced
(26 sessions, ~12.6h), Mohamed Qonswa's 33-episode Arabic Word course,
and Learn Skills Daily's long-form Word masterclass — a new Word category
chip joins the course filters.

**More Arabic courses.** Dr. Zuhair's **81-lecture IAS/IFRS standards
library (~39 hours)** — the most complete Arabic standards series on the
shelf, AMS's financial-accounting-from-zero series, Essam El-Sayyad's
cost-accounting course and Hossam Saad's integrated financial-analysis
series; the superseded single-video AMS fragment retired. Every lesson of
every new course was captured live from YouTube and **verified via
oEmbed** — 240 new verified lessons, catalog 36 → **43** courses.

## 26.0.0 — The bilingual-podcasts + AI-podcast-studio + full-courses + track-exams release

**Every podcast findable in English AND Arabic.** All 53 curated YouTube
episodes now carry both a `titleEn` and a `titleAr`; the active language
leads on each card with the other language as its second line, and a new
bilingual search box filters titles, channels and blurbs in both languages
at once. Searching "qawain" — or "قوائم" — now lands the **Qawaim
accounting podcast** instantly (its five episodes carry the literal English
title "Qawaim (Qawain) accounting podcast"), "leases" finds IFRS 16, and
"KPMG" finds the CEO interview.

**Make your own podcast, by the AI.** A new studio card tops the Podcast
page: pick the topic, the language (English or العربية), the length
(~10/15/20 minutes), the style (interview, guided lesson, friendly debate
or exam coaching) and optional host/guest names — and the AI writes a real
two-person script (two attempts before an honest fallback notice). Playing
it sends the turns to the new `/api/ai/podcast/speak` route, which voices
the host and the guest with **two different Edge neural voices**
(Ryan/Christopher in English, Salma/Shakir in Arabic) into one MP3 that the
global sticky player streams like any episode — cache, speed, seek and
download all work; both routes are rate-limited.

**Full courses, not one-lecture fragments.** The v25 Arabic track additions
that shipped as single videos ("Unit 1", "Topic 1.1", "the first lecture")
are replaced by eight complete playlist courses, every lesson id, title and
duration captured live from YouTube: **CMA Part 1 (30 lectures, 76.6h)** and
**Part 2 (19 lectures, 47.6h)** by Amro Taison, **CMA Part 1 2026 edition**
(47 sessions) by Efham CMA, **CPA AUD (21 lectures, 43h)** and **CPA FAR
(29 lectures, 57.5h)** by Amro Taison, the **full ACCA DipIFR diploma**
(51 lectures, 108h) by Abdalla Abdelnaim, the **complete CertIFR session
course** (51 sessions) by The Accounting Planet, and the **chapter-by-
chapter ACCA FA (F3) course** (32 videos) by Sowmya Sasun. Single-video
courses that genuinely are the whole course now wear a "Full course · 1
video" badge.

**Past papers for every course track.** Six new exam families join the 17 —
**CPA AUD, FAR and REG**, **CFA Level I** and **CMA Parts 1 & 2** — each
with a 24-question flagship plus the same four dated sittings as every
other family: 30 new papers, 576 new bilingual questions seeded
deterministically (bank 2,109 → **2,685**; answer positions balanced
A=145/B=147/C=143/D=141). The papers grid gains three new groups with their
own accents, and the Courses page now carries a **"Past papers & exams for
every track"** strip — ACCA, CPA, CFA, CMA, IFRS and Egyptian chips that
deep-link into the Exam Center with that track's families pre-filtered.

## 25.0.0 — The five-years-of-papers + real-podcasts release

**Five years of past papers for every exam.** Each of the 17 exam families
(15 ACCA subjects, the Egyptian SOE paper and a brand-new findable **IFRS
diploma** family) now carries its flagship paper plus four dated sittings —
Dec 2021, June 2022, Sept 2023 and June 2024 — 85 papers in all. The 1,236
new bilingual scenario questions were generated deterministically by a
parameterized past-paper factory (`scripts/seed/v25`): every sitting draws
fresh numbers and entities from exam-style templates, answer positions are
balanced across A–D, and no stem repeats anywhere in the set. The question
bank grows 873 → **2,109**. The papers grid is reorganised into family cards
with sitting chips and a search box, so the IFRS exam is one keystroke away.

**Real podcasts, not explainers.** The Podcasts section now separates
`Real podcasts \u00b7 conversations` — genuine two-person interviews and
shows — from the friendly single-presenter videos (which stay untouched):
the KPMG-CEO sit-down and five more Accounting-Club guest interviews in the
8–20-minute range, the Qawaim accounting podcast (an accountant's journey,
career paths, opening your own firm, fraud), an ACCA-experience conversation
from the Kenaz podcast, a father-and-son accounting partnership story, and
more — 15 conversation episodes, all verified live.

**Courses reorganised by track, with the Arabic library the learner asked
for.** New ACCA / CPA / CMA track tabs (with counts) join audit, IFRS and
CFA; ten new Arabic courses: the complete 12.5-hour CertIFR certificate
course, Hossam Saad's IFRS standards series, Dr. Mohamed Ismail's DipIFR
intro and CMA Part 1 marathons, Doms Academy's quarter-million-view CMA
Unit 1, Mirchawala's ACCA FA control accounts, an ACCA FA specimen
walkthrough, Sara AlAbdullah's CMA opener, and CPA Talks' certification
track — 33 → 36 courses, every id oEmbed-verified.

**The tutor opens the full chat page by default** — the floating button,
Alt+T and every lesson "Ask the tutor" entry point now land on the complete
page (conversations rail, thinking panel, voice tools) instead of the old
corner popup.

**Honest GLM routing.** The GLM-5.3 Flash flagship now serves REAL GLM
first — your Z.ai key, the workspace GLM engine, or GLM-5.3 via LLM7 behind
a FREE `LLM7_API_KEY` (dash.llm7.io) — with the community pool only as a
clearly-labelled failover whose notice explains how to get real GLM.

Also: `test-v25` battery (50 checks), v22–v24 assertions updated, SW cache
`auditedge-v25`, and the YouTube sourcing scripts (`yt-search` / `yt-verify`).

## 24.0.0 — The listen-in-app + whole-ACCA-syllabus release

Podcasts now **play inside the website**: a sticky, global player bar streams
every lesson episode while you keep browsing — the audio never cuts when you
navigate. And the Exam Center now covers the **entire ACCA syllabus**: every
Applied Knowledge, Applied Skills and Strategic Professional paper as a full
timed past paper.

- **The in-website podcast player** — a global audio player mounted at the
  app shell (survives every view change) streaming the lesson MP3s from the
  podcast endpoint: play/pause, ±10s skip, seek rail, playback speed
  (0.75×–2×, persisted), volume/mute, queue position, download and close.
  Media Session API wired for lock-screen / media-key control; an in-memory
  objectURL cache makes replays instant without re-synthesis; the Podcasts
  section gained Play-course / play-from-here / per-lesson play buttons with
  a live now-playing equalizer, EN and AR renditions.
- **The whole ACCA syllabus as past papers** — NINE new full bilingual
  papers: **BT** (18 Q), **MA** (18), **LW** (24), **PM** (24), **TX** (24),
  **SBL** (24), **AFM** (18), **APM** (18), **ATX** (18). 186 new exam-style
  questions (bank: 687 → **873**), grouped in the Exam Center by syllabus
  level (Applied Knowledge / Applied Skills / Strategic Professional /
  Egyptian practice) with level headers and paper counts. Deterministic
  answer-position rotation keeps the key honest (A/B/C/D spread).
- **Pro thumbnails on EVERY course** — the in-house course cards and course
  heroes now carry designed covers: subject-tinted gradients, a
  deterministic ledger/hatch/dot pattern per course, watermark of the
  subject mark, code + level chips and a lesson count rail. The free-course
  catalog covers were upgraded to the same designed system (monogram,
  level, language chips).
- **Auditing + IFRS + CFA courses (zero new accounting)** — 9 new full video
  courses with real YouTube thumbnails: FinanceSkul's complete ACCA F8/AA
  course, Ruchi Goyal's 10-hour AA marathon, the Bisk 9-hour CPA AUD
  review; Accounting BotCast's 10-hour All-in-One IFRS, Silvia of CPDbox's
  complete consolidation lecture, Tashwita Gupta's all-standards tour; and
  the **complete FinTree CFA Level I crash course** (8 sessions, ~65h) plus
  QuintEdge's 7-hour CFA Ethics lecture and edZeb's Quant + Ethics revision
  marathons — with a new CFA category chip.
- **Free catalog: the professional tilt** — AnalystPrep's free CFA Level I
  materials, the CFA Institute Research Foundation's free publications, and
  ACCA's official exam-support hub (free specimen exams for every paper) —
  the perfect companion to AuditEdge's adapted papers.
- SW cache `auditedge-v24`.

## 23.0.0 — The sessions-that-remember release

Tutor conversations now **survive sessions**: every chat is mirrored into the
browser's IndexedDB, so the history rail persists even on ephemeral
serverless deployments (where the sanitized demo database wiped
conversations on every instance recycle). The browser is the durable store;
the server stays the source of truth whenever it is reachable — after each
answer the client caches the authoritative copy (title + final messages,
with the locally-streamed thinking process merged in), and when a wiped
server re-issues a new conversation id the browser record migrates
seamlessly. Resuming an old chat on a fresh server even carries the recent
transcript to the model as context, so the tutor still "remembers".

- **IndexedDB chat persistence** — zero-dependency store (`auditedge-chat`),
  instant local-first rail, server back-fill for pre-v23 history, migration
  on id re-issue, delete/rename/pin mirrored, "saved on this device" hint.
- **Full-length past papers** — every v22 paper extended to a complete
  sitting: AA 30 Q / 90 min, FR 30 / 90, AAA 24 / 72, SBR 24 / 72, SOE 24 /
  72 — plus TWO NEW ACCA papers: **FA (F3)** 18 Q foundations paper and
  **FM (F9)** 18 Q financial-management paper (incl. Islamic finance). 108
  new bilingual scenario questions; the bank grows 579 → **687**.
- **AI custom exams — micro & mini** — the builder now offers named sizes:
  Micro · 5 Q (single-batch generation), Mini · 10, Standard · 15 and Full
  mock · 24, each labelled with its intent.
- **Full video courses with pro thumbnails** — 17 complete multi-hour
  YouTube courses playable in-app (lesson list + embedded player): the
  complete **CPA Talks Audit 101** series (14 episodes), The Accounting
  Planet's 2-hour and 6-hour courses, Tony Bell's 10- and 11-hour marathons,
  Excel for Finance, and the **Course Illustrator** design track (Envato
  Tuts+'s 12M-view free course, Learn Skills Daily 6h, Flux Academy
  Arabic, Will Paterson 2025) with real YouTube thumbnails.
- **More podcasts** — 15 new CPA Talks episodes (Materiality, Assertions,
  ECL + workshop, IFRS 15 parts 1–2, IFRS 16, DipIFR, Gulf careers…), 23 → 38
  episodes total.
- **More pro free courses** — CFI Accounting Fundamentals, AccountingCoach,
  Oxford Home Study bookkeeping, World Bank OLC (public financial
  management), IMFx PFM on edX, FutureLearn and Khan Academy computing —
  plus new Audit and Design & Excel category filters, and gradient subject
  covers on every link-course card.
- **Library** — reading-progress tracking (mark materials as studied,
  persisted on-device, with an X/Y progress bar and a hide-studied filter)
  and three new revision sheets: consolidation in eight moves, the IESBA
  five threats & safeguards, and IFRS 9 classification + the ECL ladder
  (11 total).
- SW cache `auditedge-v23`.

## 22.0.0 — The keyless AI + exam-readiness release

The AI stack now works with **zero setup**: a keyless community engine pool
(curated from freellmpool — Kilo Gateway, LLM7, Pollinations, OVHcloud) backs
the new **GLM-5.3 Flash** default engine and fails over automatically from
the Z.ai key engine and the workspace GLM engine — so the tutor, analyst and
drafters work on any deployment, Vercel included, with no environment
variables. Reasoning engines stream a visible **thinking process** above
every answer (🧠 toggle in the tutor header), with honest engine badges.

- **Keyless GLM-5.3 Flash engine** (default) + Kilo Auto / Qwen3.5 397B / LLM7 Fast pool models in a grouped switcher; vision requests fall back to OVH's keyless Qwen2.5-VL before flattening.
- **Thinking process** — reasoning tokens (GLM reasoning_content / pool `reasoning` streams) render in a collapsible panel above answers; per-request toggle persisted.
- **Previous exam papers** — five timed adapted papers in the Exam Center: ACCA AA, AAA, FR, SBR styles plus an Egyptian SOE paper — 60 new bilingual scenario questions (bank: 579).
- **AI custom-exam builder** — describe a topic, pick section/difficulty/count/language, and the AI writes fresh exam-style MCQs (chunked, serverless-safe generation with salvage parsing) into a timed sitting that feeds mistakes + spaced repetition.
- **Podcasts from YouTube — بالعربي** — 23 curated episodes across CPA Talks, Mahmoud Hamouda, ESAA, Hany Sayed, Yazan Makdah and more, with category filters and click-to-play embeds.
- **Pro free courses** — a 13-entry catalog anyone can access (ACCA/edX, MIT OCW, Open University, Khan Academy, IFRS Foundation, iasplus, Alison, Edraak, EKB) with free-certificate badges.
- **Library** — three new revision sheets: assertions→evidence map, the IFRS big-five, and fraud/related-party red flags (8 total).
- Engine badges everywhere (tutor, analyst), `examGen` rate limit, SW cache `auditedge-v22`.

## 21.0.0 — The deep-improvement release

Born from a four-lens deep audit (tutor/voice UX, content & learning flow,
engagement workspace, platform infrastructure). Every P0/P1/P2 finding
implemented — **46+ improvements, 991+ automated checks green.**

### P0 — correctness & trust
- **Mock exams now speak Arabic**: sitting + results screens use `stemAr`/`optionsAr`/`explanationsAr` (practice already did; the timed paper didn't).
- **Server-enforced exam clock**: late submissions are graded but flagged `timedOut` (badge in results + history) — a crashed tab can never inflate a mock score. Plus pace stats (avg s/question) and a score-trend chart.
- **Studio can no longer destroy bilingual content**: `sanitizeQuiz` and the lesson PATCH/POST routes preserve `questionAr`/`optionsAr`/`explanationAr`/`contentAr`, and the lesson editor gained full Arabic authoring tabs (lesson AR edition + per-question AR panels).
- **Stop means stop**: the tutor's Stop button now cancels the upstream stream (`req.signal` → reader cancel) and persists the visible partial with a bilingual `*(stopped · أُوقف)*` marker — reload shows exactly what you read.
- **Engine honesty**: answers served by the built-in workspace engine (no Z.ai key) carry a visible notice + a "workspace engine" badge instead of pretending to be the selected GLM model.
- **Regenerate guards image questions** (the attachment can't be re-sent — explained instead of silently downgraded).
- **Error boundaries everywhere**: `error.tsx`, `global-error.tsx`, `not-found.tsx` — one bad payload can never white-screen the workspace.
- **Rate limiting on every AI route** (per-IP sliding windows; chat 20/2min, TTS 60, ASR 30, drafting 8) — protects the AI quota if the deployed URL leaks.
- **Security headers** (nosniff, referrer policy, SAMEORIGIN framing, permissions policy).
- **Mic UX fully bilingual** + ASR language hint (`ar-EG`/`en` passed through, with a no-hint retry).
- **Markdown RTL correctness**: logical (`border-s`/`ps-*`/`text-start`) utilities — Arabic answers render mirrored properly.
- **Alt+T** now actually opens/closes the tutor popup (the tooltip promised it since v11).
- **Unbiased Fisher–Yates** replaces the biased sort in the practice draw.
- Repo hygiene: version 21.0.0, SW cache `auditedge-v21`, `tool-results/`+`download/` untracked & gitignored, `git gc` reclaimed ~216 MB, README counts refreshed (41 courses / 990 lessons), `bun run test` + `test:all` scripts, GitHub Actions CI installed (`.github/workflows/ci.yml`: lint → tsc → batteries → build).

### P1 — the learning loop closes
- **Mistake book**: "Drill my misses" — every question whose LATEST attempt was wrong (a later correct answer redeems it), drawn as a practice set from `/api/bank/misses`.
- **Course-quiz misses now seed the SRS queue** (they used to vanish after the reveal).
- **Weak-topic one-tap remediation**: analytics heatmap chips pre-filter the Exam Center drill; study-plan items deep-link to the exact course / drill / sim / review.
- **Conversation management**: rename inline, pin to the top, full-text search across message content (`?q=` server-side) — not just titles.
- **One-tap EN↔AR translation** of any tutor answer (tutor + popup, toggleable, markdown-preserving prompt, codes kept in Latin).
- **Popup tutor parity**: copy, translate, follow-up chips, regenerate and error-retry now exist on the floating tutor too.
- **TTS double-buffer prefetch** (no dead air between chunks) + **global pause/resume** on every speak control.
- **Per-language voice memory**: pick Shakir for Arabic and Ryan for English once — "auto" remembers both.
- **Engagement tools write back**: the materiality calculator saves its ISA 320 memo (rationale included — PM/CTT sync to the SAD), the JE analyzer saves its population/exceptions summary, findings gained WP refs, a qualitative flag and proposed Dr/Cr adjustments, PBC items show chaser aging.
- **The Close-out tab** (new 5th tab of the Audit Program): close-out dashboard, **AI partner EQR review** of the whole file (file-breakers / judgment risks / good discipline / the one fix first), assertion coverage map, working-paper index (missing + duplicate ref detection), interactive ISA 570 going-concern checklist, IR×CR risk matrix with derived RMM, and a one-click Markdown close-out bundle.
- **Workspace backup round-trip**: the engagement file, KAM drafts and industry histories (localStorage-only data the server export can't see) download as one JSON and re-import after a browser reset.
- **Engagements link to industry sectors** (20 profiles) — carried into the close-out bundle.
- **Seeded systematic selection** in the sampling calculator (documentable method + seed + item list, copyable).
- **Command palette**: full-text lesson-BODY search (cached haystacks) + Tab now runs the highlighted entry.
- **Lesson bookmarks** + a "Saved lessons" Home card.
- **Revision Sheets** (Library): five printable bilingual exam-night one-pagers — materiality ladder, opinion decision tree, going-concern ladder, risk model, field ratios.
- **Code-split heavy views** (program, studio, exam, simulation, sectors, podcast, discover, analytics, review) with content-shaped skeletons; `prefers-reduced-motion` honored via CSS + `MotionConfig`; print stylesheet for study artifacts.

### P2 — depth
- **Egyptian framework bank fully bilingual**: 44 new Arabic translations → egypt area 47/47 (it was 3/47 — the worst gap exactly where the blueprint weights 15%).
- **IFRS 18 course** (4 bilingual lessons + 5-question quiz + 12 bank questions incl. true/false & scenario stems) — the 2027 presentation overhaul the platform taught nothing about.
- **Tutor prompt deepened**: materiality mechanics (benchmark → % → PM/CTT), the opinion-modification ladder, going-concern triggers & ladder, the Egyptian tax layer (91/2005, VAT 67/2016, e-invoicing), SOE/public-sector context (CAO, Law 144/2019), exam-blueprint weighting (45/30/15/10), a 150–400-word answer budget, and a canonical Arabic glossary for terminological consistency.
- **Rolling conversation memory**: messages beyond the 16-message window fold into a stored summary (every 8 messages) and return as system context — long tutoring arcs stop re-teaching themselves.

## 20.1.0 — Roadmap completion pass

Closes every remaining acceptance criterion from the improvement roadmap that
v20.0.0 left partially met. **959 automated checks green.**

- **P1-8 completed to the letter**: the last two in-house lessons pushed past
  1,500 body characters — the Covenant Winter capstone gains the examiner's
  marking-rubric section; archival discipline gains the digital-file variant.
  All 46 core lessons now clear the roadmap's threshold
- **P0-1 completed**: the Exam Center hub now shows **Past sittings** — the
  sitting history (date, length, score, per-sitting correct counts) with
  pass/fail tinting, bilingual
- **P1-5 completed to the letter**: exam, simulation and review discipline
  now **score into achievements** — six new bilingual badges (Exam Sitter,
  Exam Ready 70%+, Engagement Senior, Partner's Judgment 80%+,
  Review Habit 25 cards, Bank Driller 100 practice answers) fed by seven new
  engagement stats in the bootstrap payload
- **P0-3 completed**: the review streak is now really computed — consecutive
  days with at least one graded card — instead of the placeholder zero
- **P2-11 completed**: **Queue whole course** buttons drain an entire course
  through the podcast engine one episode at a time (EN + Arabic for lessons
  with Arabic editions), status visible in the download queue; the Arabic
  episode route live-verified (Salma voice, 745 KB for a full lesson)
- **P1-6 at 100% quiz parity**: all **142 course-quiz questions** now carry
  Arabic variants (88 core-8 incl. checkpoints + 54 spine), and the bilingual
  bank grew to **103 Arabic questions** (+38)
- **P1-7 verified end-to-end**: the export → import round-trip confirmed
  idempotent (upserts, no duplicates) across all nine data families

## 20.0.0 — The Exam-Readiness Release: all 19 roadmap initiatives shipped

Every P0, P1 and P2 initiative from the v19.2 improvement roadmap, in one
release. **956 automated checks** (912 legacy + 44 new v20 battery).

### P0 — the exam-readiness core

- **P0-1 Question Bank + Exam Simulation Center.** A seeded bank of **502
  questions** (65 bilingual EN/AR) across ISA, Egyptian standards, IFRS and
  ethics — every item with four options, an answer key, an explanation, a
  standard tag, a difficulty and an area. Practice mode filters by area,
  standard and difficulty with instant server-side grading and explanations;
  misses automatically join the review queue. Mock exams: 40Q/60-min and
  60Q/90-min sittings sampled on a SOXE/EEC-style blueprint (45% auditing ·
  30% accounting · 15% Egyptian framework · 10% ethics), difficulty-stratified,
  with a live countdown, question navigator, flag-for-review and a results
  screen with section breakdown, per-question answer key and XP. The answer
  key never ships to the browser mid-sitting — grading is server-side only
- **P0-2 Complete the ISA spine.** Nine compact courses (33 lessons, 9
  quizzes) covering the reporting cluster (ISA 700/701/705/706), ISA 505,
  ISA 520/530, ISA 550, ISA 560, ISA 580, ISA 600, ISQM 1 and the IESBA
  ethics code — each lesson with worked Egyptian examples; each course quiz
  mirrors into the bank so curriculum and bank grow together
- **P0-3 Spaced-repetition review engine.** An SM-2-lite scheduler
  (src/lib/srs.ts) over lesson key points and missed bank questions:
  completing a lesson seeds its key points as flashcards (due the next
  morning), wrong practice/exam answers become question cards, and the daily
  Review view + Home card grade on a four-button ladder (Again / Hard / Good
  / Easy) with ease, interval and lapse tracking. The nav shows a due-count
  badge

### P1 — retention and differentiation

- **P1-4 Mastery & coverage analytics.** Per-standard mastery scores
  (recency-decayed accuracy damped by confidence), a weakest-first mastery
  heatmap, exam-section readiness meters (accuracy x coverage), practice
  accuracy, exam history and simulation runs — plus AI study plans that are
  generated from the measured weak spots, persisted and tracked with
  per-item completion checkboxes
- **P1-5 Case-based engagement simulation.** Nile Textiles FY2026: a full
  statutory-audit walkthrough (client acceptance -> risk assessment ->
  response -> completion -> reporting) with 15 judgment calls — 13 scored
  decisions with partner-level feedback and 2 free-text judgments graded
  live by the AI against rubrics — engagement documents (PBC excerpts,
  covenant letters, trial-balance extracts), a final scored debrief from
  the AI partner, and XP that scores into the workspace
- **P1-6 Arabic curriculum parity.** All 45 lessons of the 8 in-house courses
  now carry full Arabic editions (46 with the new capstone workshop), all 48
  in-house quiz questions have Arabic variants, the bank ships 65 bilingual
  questions, the lesson player auto-renders the Arabic edition in the Arabic
  UI with a manual AR/EN toggle, and the 23 external video imports are
  flagged as Supplementary and ordered after the core curriculum
- **P1-7 Production data persistence.** Vercel deployments can now attach a
  managed Postgres database: scripts/db-deploy.ts runs at build time, flips
  the Prisma provider and pushes the schema, and the app talks to the
  managed DB directly — user data survives redeploys. The zero-config
  snapshot mode remains the fallback, with a full export/import escape hatch
  (Library -> Your data): one JSON download carries progress, notes, review
  queue, exam history, study plans and AI conversations. README documents
  both modes
- **P1-8 Lesson depth pass.** The four thinnest in-house lessons gained
  "Field notes from Egyptian practice" sections; every in-house lesson now
  clears 1,000+ body characters; a new ISA-570 capstone workshop (The
  Covenant Winter) integrates the going-concern case end-to-end; the 8
  near-empty video-wrapper lessons in the Arabic Excel-audit course gained
  authored Arabic study notes

### P2 — quality of life

- **P2-9 Lesson notes & highlights.** A per-lesson Notes drawer (create,
  list, delete) plus text selection -> floating Highlight button; saved
  highlights quote the passage; per-section Ask-the-tutor buttons deep-link
  the AI tutor with the section text
- **P2-10 Workpaper template library.** Four field-ready downloads generated
  server-side: lead schedule, bank reconciliation and confirmations control
  sheet (Excel) and the going-concern memo (Word) — bilingual headers,
  print-formatted, from the Library
- **P2-11 Podcast mode.** Any lesson becomes a listenable episode: the
  per-lesson route synthesizes the full text with an Edge neural voice
  (Salma for Arabic, Ryan for English) and downloads an MP3; the Podcast
  view queues downloads per course with progress states
- **P2-12 Global command palette.** Ctrl/Cmd+K opens a bilingual search
  across views, courses, lessons, library standards and quick actions —
  arrow-key navigation, grouped results, direct deep-links into lessons
- **P2-13 CPE log.** Completed-lesson hours plus certificate hours aggregate
  into a CPE evidence log per course with a one-click CSV export (BOM-encoded
  for Arabic-safe Excel) for license renewals
- **P2-14 Analytics home.** The Team view rebrands into a personal analytics
  home (stat strip, heatmap, readiness, study plan, CPE, exam and simulation
  history) with member management preserved for admins in a collapsible
  section

### Quick wins

- Assessment badges on course cards (quiz counts visible at a glance)
- Continue-where-you-left-off card on Home (last-opened lesson, one tap)
- 8 mid-course checkpoint quizzes (40 new questions, mirrored into the bank)
- The census script runs before each release to catch assessment-free
  courses and empty lessons automatically
- README deploy runbook carries the ephemeral-data warning and the Postgres
  route

### Infrastructure

- Schema additions (additive, no data loss): BankQuestion, BankAttempt,
  ExamSession, ReviewItem, SimRun, LessonNote, StudyPlan +
  lastLessonId/lastLessonAt on User, contentAr on Lesson, supplementary on
  Course — SQLite locally, Postgres-ready for Vercel
- The Vercel snapshot now includes the question bank and all v20 content
  (40 courses · 985 lessons · 26 quizzes · 502 bank questions · 3.5 MB gz)
  with the six new personal-data tables wiped on every rebuild
- exceljs + docx dependencies for real server-side file generation

## 19.2.0 — Tutor conversations rail: closed by default

- The AI Tutor's conversations rail is now collapsible and **closed by default**,
  giving the chat the full width until the learner pins it open: a panel toggle
  at the start of the tutor header (PanelLeft icons, RTL-mirrored in Arabic,
  `aria-expanded` + bilingual tooltips) opens and closes the rail with a smooth
  width animation
- The choice persists per browser (`auditedge-tutor-rail`, hydrated at app
  load); first visits and cleared storage start closed
- Collapsed rail content is `inert` — excluded from the tab order and the
  accessibility tree while hidden; mobile keeps its existing history sheet
- Product deep-dive: a content/platform census script
  (`scripts/survey-analysis-v192.ts`) captured the ground-truth numbers behind
  the v19.2 improvement roadmap (assessment coverage, curriculum gaps, content
  depth, library and voice inventory)

## 19.1.0 — Collapsible sidebar + AI tutor panel upgrades

- The desktop sidebar can now be opened and closed: a collapse toggle in the
  sidebar header shrinks it to a 72 px icon rail (tooltips carry the labels,
  active items keep their accent bar, badges become dots), the main content
  re-flows smoothly, and the choice persists per browser. `Ctrl/Cmd+B`
  toggles it from the keyboard anywhere in the app; mobile keeps its existing
  hamburger sheet
- Collapsed rail: micro theme and language buttons (single-tap squares) and
  the avatar with the user's name on hover
- One-tap follow-ups under the tutor's latest answer — *Explain simpler,
  Field example, Quiz me, Key points* — each sends a tuned bilingual prompt
  that builds on the answer above it (EN/AR)
- Regenerate answer: re-asks the same question for a fresh response. The old
  exchange is trimmed server-side first (`PATCH /api/ai/conversations/:id`
  with `action: "trimLastExchange"`), so reloading the conversation never
  shows stale duplicates
- Export conversation as Markdown: downloads the transcript as a clean
  `.md` study note (title, attribution header, Q/A sections)
- Conversation history rail: live search filter (appears from five
  conversations), recency groups (Today / Yesterday / Previous 7 days /
  Older) and message counts on every entry — desktop rail and mobile sheet
- Quick-ask popup parity: image attachment (vision model) and the web-search
  toggle join the mic and voice picker in the popup composer; image intake
  logic moved to the shared `src/lib/image-attach.ts`
- e2e suite: the three v6-era checks that still expected the pre-v16 team
  picker and API auth wall were updated to the sessionless single-user
  reality — 28/28 green again

## 19.0.0 — Voice conversation with the AI tutor

- Automatic answer reading: the tutor speaks every answer aloud as it
  finishes streaming (header toggle, persisted per browser; the voice and
  speed still come from the voice picker — 23 voices, 16 of them Edge
  neural)
- Hands-free voice conversation mode: after each spoken answer the tutor
  opens the microphone, transcribes the next question and sends it
  automatically — a speak/listen loop with zero clicks. Any new question
  or manual playback interrupts cleanly through the app-wide
  single-playback registry; the mic auto-starts only after playback ends
  (a 350 ms tail guard prevents the answer's echo from being transcribed)
- The TTS playback pipeline moved into `useTtsQueue`, now shared by the
  manual SpeakButton, automatic reading and the voice loop, with
  completion callbacks; manual read-aloud behavior is unchanged
- Voice input polish: transcribed text lands focused in the composer for
  review before sending (manual mode)
- The tutor's persona gained a learning-coach layer calibrated to a senior
  associate's development: level diagnosis before teaching, objective-first
  lessons, working-paper review and fieldwork supervision coaching,
  interactive engagement simulations (one decision at a time with debriefs),
  exam-board-style drilling marked against model answers, day-by-day study
  plans and spaced retrieval

## 18.0.2 — Vercel deployment support

- The deployed app had no data: `db/` is gitignored and Vercel's serverless
  filesystem is read-only, so every request hit a missing SQLite file. The
  repo now ships a sanitized content snapshot (`prisma/auditedge-demo.db.gz`,
  3.3 MB — 30 courses, 103 modules, 933 lessons, 146 materials and the single
  workspace user; AI chats, progress and certificates stripped) built by
  `scripts/make-vercel-snapshot.ts`
- `src/lib/db.ts` provisions the snapshot into the instance temp directory on
  first request when running on Vercel — local dev and self-hosted builds are
  byte-for-byte untouched (the branch is gated on Vercel's `VERCEL=1` marker)
- `vercel.json`: build command runs `prisma generate` before `next build`, and
  pins a default `DATABASE_URL`
- `outputFileTracingIncludes` ships the snapshot with every serverless function
- README gains a "Deploying to Vercel" section (env vars, deployment-protection
  toggle, ephemeral-writes caveat, snapshot refresh workflow)

## 18.0.1 — Dev-infrastructure hardening

- Self-healing dev launcher (`scripts/dev-clean.sh`): clears the Turbopack
  cache before every `bun run dev` — sandbox sleep/wake cycles corrupted it
  twice, breaking the app with an "unexpected Turbopack error" overlay
- Lockfile manifest sync (`@dnd-kit/utilities` range echo corrected)
- Vision test fixture now ships at `scripts/fixtures/` so the models suite
  runs 14/14 from a fresh clone
- `worklog.md`, `research/`, `.restore/`, `skills/` ignored as local
  workspace artifacts

## 18.0.0 — International neural voices

- Microsoft Edge neural TTS integrated server-side from scratch: WSS protocol
  with the `Sec-MS-GEC` DRM token, current-Chromium user agent, SSML synthesis,
  binary frame reassembly to MP3, clock-skew retry — no API key required
  (`src/lib/edge-tts.ts`)
- 16 curated neural voices: Egyptian Arabic (Salma, Shakir), Gulf Arabic
  (Zariyah, Hamed), US/UK/AU/IN English (Jenny, Guy, Sonia, Ryan, Natasha,
  Neerja), French, Spanish, German, Italian, Turkish, Hindi
- Auto mode now routes Arabic to Salma (natural Egyptian neural speech) and
  English to Jenny, with a silent fallback chain to the built-in Z.ai voices
- Voice picker redesigned: search, grouped sections, per-language previews,
  gender/locale metadata, deterministic direction-aware dropdown anchoring
  (fixes an RTL mobile overflow the old flip logic could never fix)

## 17.0.0 — Multi-voice read-aloud

- All 7 built-in TTS voices selectable across every read-aloud surface
- Probe-verified Arabic capability badges (audio duration analysis showed
  which voices read Arabic natively vs letter-crawling)
- Per-voice previews, playback speed control (0.75x – 1.5x), persisted
  preferences, app-wide single-playback registry

## 16.0.0 — Dark mode & UI/UX polish

- Full dark theme: 10 theme-aware accent tokens, ~270 hardcoded hexes migrated
  to semantic tokens, FOUC-free pre-paint script, OS-preference aware
- Visual audit driven pass: gradient hero + richer empty states, counted
  filter pills, achievement earn-progress bars, sticky program tabs,
  collapsible AI analyst panel, RTL-safe cards, bigger mobile touch targets
- SSE double-close bug fixed in the chat route

## 15.0.0 — AI engine upgrade & Industry Risk Analyst

- AI Industry Risk Analyst with streaming sector-specific risk profiles and
  deep-dive presets (recovery of the v14 work lost to a workspace rollback)
- Z.ai open-platform key wired as the production engine: GLM-4.7-Flash
  default (reasoning, free), GLM-4.6V-Flash for vision (free), GLM-4-Plus
  selectable — with a model switcher and graceful fallback chain

## 14.0.0 — Sector deep dives

- 20 sector risk profiles with account-level risk matrices, assertions and
  engagement presets (rolled into the v15 recovery release)

## 13.0.0 — Sector Risk Library & full-site bilingual toggle

- Sector Risk Library covering 20 industries with structured risk data
- Site-wide EN/AR toggle fixed across every view

## 12.0.0 — Engagement fieldwork tooling

- Audit Program evolved from a reference checklist into a fieldwork tool:
  PBC lists, findings, signoffs, program tools

## 11.0.0 — Analyzers, KAM drafter & offline PWA

- Trial balance & journal-entry analyzer
- Key Audit Matters (KAM) drafter
- Installable PWA with offline lessons
- Full forensic re-audit: every bug and fake-data remnant eliminated

## 10.0.0 — Bilingual program, voice & dictation

- Audit Program fully bilingual (EN/AR)
- Read-aloud TTS and speech-to-text dictation in the AI composer

## 9.0.0 — Full-page AI tutor

- AI Tutor promoted to a first-class full page (plus the floating popup)
- Dead-code cleanup

## 8.0.0 — Standards library expansion

- IFRS core and Egyptian Auditing Standards (FRA decree texts) added to the
  library; Arabic IFRS/auditing playlist courses; full re-audit

## 7.0.0 — Single-user, real data only

- Workspace collapsed to one real member — no fake leaderboard colleagues,
  fabricated ratings or demo personas anywhere

## 6.0.0 — Official texts & Discover & Import

- FRA & IFAC official texts ingested into the library
- Curated Arabic auditing/IFRS playlists
- Discover & Import: search Coursera, MIT OCW, edX, OpenStax and YouTube,
  import as courses

## 5.0.0 — Passwordless, RAG, PWA groundwork

- Passwordless single-user access (the app simply opens)
- RAG over the materials library with cited excerpts
- CPE export, backups, video lessons, PWA scaffolding, 2026 content refresh

## 4.0.0 — Deep audit & roadmap

- Full code + in-browser audit as a user; improvement roadmap produced and
  executed in subsequent versions

## 3.0.0 — Auth, GLM tutor & team

- Password auth + sessions
- GLM AI tutor with web-search agent and streaming, as a tab and a floating
  popup; team password management

## 2.0.0 — Pro redesign

- Claude-style UI redesign: dashboard-first pro tool, no landing page
- Real content management (uploads, builder)

## 1.0.0 — Initial release

- AuditEdge Academy built end-to-end: courses, lessons, quizzes, progress,
  certificates, achievements, library and dashboard
