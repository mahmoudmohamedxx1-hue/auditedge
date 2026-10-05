"""Report prose — part B: Sections 2-5."""

# ------------------------------------------------------------------ Section 2
SEC2_PLATFORM = (
    "AuditEdge Academy is a bilingual (English / Arabic) accounting-education "
    "platform for ACCA, IFRS, CPA, CMA and CFA candidates, built as a single "
    "Next.js application with a hash-based router serving 22 distinct views, "
    "50 API route files and 54 audit-domain React components - 75,783 lines "
    "of TypeScript in all. State persists through Prisma onto SQLite, and "
    "offline behaviour is managed by a service worker whose cache stamp is "
    "locked in lockstep with the app version, so stale caches self-heal - a "
    "lesson learned the hard way in v33 and automated ever since. The entire "
    "interface chrome, on every view, is driven from one i18n dictionary of "
    "roughly 1,275 keys carrying full English and Arabic editions, including "
    "right-to-left layout switching. Where structure matters, content ships "
    "as versioned TypeScript libraries rather than database blobs: the IFRS "
    "library (15,493 lines), the audit-program library (5,691 lines) and the "
    "new Test of Control library (2,138 lines) are all typed, testable and "
    "covered by the regression battery."
)

SEC2_LEARNING = (
    "The learning spine carries 41 courses and 990 lessons - the in-house "
    "core fully bilingual - plus 27 quizzes wired into a spaced-repetition "
    "review engine that schedules recall on an ease-adjusted interval ladder "
    "(again-grade repeats in ten minutes, a first good answer returns in a "
    "day, an easy answer in three). Progress feeds XP levels, an "
    "achievements view and a certificate engine, while a study-plan API "
    "spreads preparation across calendar time. The lesson player pairs text "
    "with auto-generated voice, and the podcast studio can package any "
    "lesson as a voiced bilingual episode."
)

SEC2_EXAM = (
    "Exam preparation is the deepest vertical. The exam center draws from a "
    "2,685-question bank spanning auditing, financial accounting, Egyptian "
    "regulation and ethics, allocated by a blueprint engine - a 45/30/15/10 "
    "section weighting - that generates deterministic, non-duplicating "
    "sittings of 40 or 60 questions from a single seed. The DipIFR archive, "
    "assembled across v34 and v35, self-hosts 30 files (34 MB) covering "
    "every sitting from 2013 to 2025 plus companion workbooks, a question "
    "index and an English-Arabic glossary - all opened inside the site's own "
    "viewer rather than through external links. Two AI routes round out the "
    "vertical: an exam generator that assembles papers to a blueprint, and "
    "a marker that grades free-text answers. Only the five heaviest files "
    "(three workbooks, the BPP kit and the BPP text) remain external "
    "downloads, since each exceeds Git's 100 MB object limit."
)

SEC2_REFERENCE = (
    "The reference library is anchored by the IFRS Summaries: all 41 "
    "standards in scope, 2,125 revision blocks in total, an average of 51.8 "
    "blocks per standard and an enforced floor of 45 - no standard is thin. "
    "Blocks are typed (headings, paragraphs, lists, margin notes, formulas, "
    "step sequences, classification trees, journal entries, worked examples "
    "and exam tips), and journal entries render as T-account tables with "
    "code-styled narration strips. The flagship, IFRS 15, was rewritten in "
    "v36 to the full depth of the source notes PDF and now stands at 110 "
    "blocks with six journal-entry sets. Alongside the summaries sit the "
    "audit-program builder - sector programs, risk libraries, methodology, "
    "findings, sign-offs, close-out and a prepared-by-client request "
    "tracker, guarded by the 515-check sector suite - a KAM drafter for key "
    "audit matters, and a trial-balance analyzer that ingests balances and "
    "flags the classic error patterns."
)

SEC2_AI = (
    "AI tooling runs through one shared model pool with a per-feature API "
    "route: a persistent tutor and assistant with conversation history, a "
    "podcast studio (edge voices verified across two probes in v28), an "
    "industry analyzer, a program tailorer, the exam generator and marker "
    "pair, and now the ToC generator. Every AI route sits behind the draft "
    "policy - rate-limited and session-gated - and the newest adds a "
    "hardened JSON pipeline: replies are forced to JSON, passed through a "
    "normalizer that repairs fence-stripping, near-miss domain names, "
    "weight drift and duplicate ids, and retried once on structural "
    "failure, so the client always receives a runnable questionnaire."
)

SEC2_TOC = (
    "The Test of Control section, shipped in v37, is the newest flagship. "
    "It answers one fieldwork question - can this firm's control "
    "environment be relied upon? - with three coordinated pieces. The "
    "library: 45 industry modules across ten sectors, each carrying 10-13 "
    "manager-interview questions with probe hints (what a good answer "
    "sounds like), significance weights of 1-3 and critical-control flags, "
    "plus 5-8 recommended tests of controls; a universal 22-question core "
    "- the COSO 2013 five components plus IT and cyber general controls - "
    "opens every questionnaire, so no entity skips the fundamentals. The "
    "verdict engine: weighted Yes/No scoring with N/A excluded from the "
    "denominator, per-component domain scores, and keystone controls whose "
    "failure overrides the aggregate - Strong requires at least 80 percent "
    "with zero critical failures, Moderate requires 50 percent with at most "
    "two, anything less is Weak. Results render with domain score bars, "
    "red-flagged criticals, a gap list with remediation hints, the "
    "corroborating procedures mapped to ISA 315/330 strategy, and a "
    "one-click markdown working-paper export. The AI generator: any "
    "industry not in the library - however niche - plus its case context "
    "produces a full bilingual questionnaire, saved locally (capped at "
    "twelve) with re-open, delete and regenerate. In total the section "
    "carries 496 authored questions, 2,138 lines of library code and 1,579 "
    "lines of interface code, guarded by 75 regression checks and the "
    "19-check end-to-end walkthrough described in Section 1."
)

SEC2_DB_TABLE = [
    ("Bank questions (exam engine)", "2,685"),
    ("Courses", "41"),
    ("Lessons", "990"),
    ("Quizzes", "27"),
    ("Test-of-Control questions (45 industries)", "496"),
    ("IFRS revision blocks (41 standards)", "2,125"),
    ("i18n dictionary keys (EN + AR)", "~1,275"),
    ("Self-hosted DipIFR papers + companions", "30 files / 34 MB"),
]

# ------------------------------------------------------------------ Section 3
SEC3_STRENGTH_DISCIPLINE = (
    "The project's strongest asset is not any single feature but the "
    "shipping habit: 31 commits, every version from v20 to v37 released "
    "through the same ritual - full battery green, types clean, lint clean, "
    "an end-to-end walkthrough, a CHANGELOG entry, then push, with Vercel "
    "deploying from main in roughly ninety seconds. The regression suite "
    "has grown monotonically with the product - 34 test scripts and 12 "
    "end-to-end scripts now live in the repository - which means every "
    "feature shipped since v20 is still re-verified on every run. The "
    "2,117-check total is cumulative armor, not a snapshot."
)

SEC3_STRENGTH_STRUCT = (
    "Three structural strengths stand out. Bilingual parity is treated as a "
    "first-class invariant rather than an afterthought: one dictionary "
    "drives every view, Arabic editions of lessons and quiz variants are "
    "asserted by dedicated suites, and right-to-left layout switches with "
    "the language. The version number has a single source of truth - "
    "package.json - that flows to the build environment, the sidebar badge "
    "and the service-worker stamp, with a suite enforcing the lockstep; "
    "this is precisely what killed the v33 stale-cache incident class and "
    "made staleness visible at a glance. And the exam archive's move "
    "in-app (v35) means the heaviest learning assets now ship with the "
    "deployment and open in the site's own viewer, with the correct MIME "
    "type verified by probe."
)

SEC3_RISK_INTRO = (
    "Six risks are worth naming. None is a defect today; each is a "
    "condition that will eventually cost an afternoon or a user if left "
    "alone. They are ordered by expected impact."
)

SEC3_RISK_TABLE = [
    ("AI pool rate-limiting", "Medium",
     "A live HTTP 429 was observed during the model-registry probe; the pool "
     "is shared capacity, so any AI feature can degrade at peak times.",
     "Retry with exponential backoff, response caching, graceful retry UX."),
    ("Manual environment bootstrap", "Medium",
     "Fresh clones and sandboxes fail 15 battery checks until the content "
     "snapshot is restored by hand.",
     "Auto-restore guard when the bank count reads zero."),
    ("Single-user local auth", "Medium",
     "One local user, no accounts or roles; blocks team cohorts, shared "
     "progress and institutional use.",
     "Multi-user model with roles when collaboration is required."),
    ("IFRS depth unevenness", "Medium",
     "Only IFRS 15 sits at flagship depth (110 blocks); the other major "
     "standards sit at 45-64 blocks against the source notes' full depth.",
     "Continue the v36 pattern: 2-3 flagship rewrites per release."),
    ("Heavy exam files external", "Low",
     "Five files above Git's 100 MB limit live outside the repository; "
     "external links can rot silently.",
     "Periodic link checks; consider LFS or object storage."),
    ("Arabic ToC library coverage", "Low",
     "Industry questionnaires are authored in English; Arabic output "
     "currently relies on the AI generator.",
     "Author Arabic editions for the highest-traffic industries."),
]

SEC3_RISK_AFTER = (
    "Two structural observations complete the assessment. The scripts "
    "directory now carries the project's full archaeological record - "
    "versioned suites back to v4, seed banks, probes and one-off repairs - "
    "which is a strength for verification but deserves a periodic pruning "
    "pass of superseded utilities so the suite list stays legible. And the "
    "content snapshot doubles as the deployment seed: it is regenerated per "
    "release and restored on demand, a mechanism that has proven robust, "
    "and one more reason the auto-restore guard recommended in Section 4 "
    "matters - it converts the snapshot from a manual ritual into an "
    "invariant."
)

# ------------------------------------------------------------------ Section 4
SEC4_QUICK_INTRO = (
    "The quick-wins list is deliberately short and deliberately cheap: each "
    "item is hours to a day of work, and each either hardens something this "
    "audit measured or removes a papercut a real user would feel."
)

SEC4_QUICK = [
    ("Auto-restore guard",
     "Detect a zero bank count at the start of the test chain and restore "
     "the snapshot automatically. Eliminates the only failure mode observed "
     "in this entire campaign."),
    ("ICQ export to PDF",
     "The markdown working-paper export exists; a print-styled PDF version "
     "makes the Test of Control output shareable with engagement partners "
     "without a converter."),
    ("AI pool retry with backoff",
     "A 429 was observed live; a retry layer with jitter improves every AI "
     "feature at once and costs one utility module."),
    ("Verdict history per entity",
     "Keep past assessments and show the delta - is the control "
     "environment improving or degrading between visits?"),
]

SEC4_MID_INTRO = (
    "The mid-term items are release-sized: one to two releases of focused "
    "work each, sequenced to compound."
)

SEC4_MID = [
    ("IFRS flagship deepening",
     "IFRS 16 Leases and IFRS 9 Financial Instruments first (both heavily "
     "examined), then IAS 12 Income Taxes and IAS 19 Employee Benefits. "
     "The v36 pattern - measure depth in words and journal sets, not block "
     "counts - is proven and reusable."),
    ("Arabic editions of the ToC library",
     "Translate the industry names, summaries and probe hints for the ten "
     "sectors' flagship industries, making the section fully bilingual "
     "without AI dependence."),
    ("Bank analytics",
     "Surface per-tag miss rates - which standards learners actually fail "
     "- and feed them into the study-plan engine so review targets "
     "weakness instead of calendar order."),
    ("Screening ICQ mode",
     "A 10-question screening questionnaire per industry for first "
     "engagements, distinct from the full fieldwork instrument."),
]

SEC4_STRATEGIC_INTRO = (
    "The strategic horizon is about who the product serves, not what it "
    "contains. None of these belongs in the next release; all of them "
    "belong in the decision about the next quarter."
)

SEC4_STRATEGIC = [
    ("Multi-user teams and roles",
     "Firms running Test of Control across multiple clients; instructors "
     "tracking cohorts; shared progress and certificates."),
    ("Engagement analytics dashboard",
     "Content-ops visibility: what is studied, where learners stall, which "
     "summaries earn re-reads."),
    ("Monetization surface",
     "Subscriptions or institutional licensing once accounts and teams "
     "exist; the exam archive and the ToC section are the natural paid "
     "anchors."),
    ("Full offline PWA for the archive",
     "Cache exam papers for offline use, making the app usable on flights "
     "and in exam-hall conditions."),
]

SEC4_V38 = (
    "The cheapest high-value v38 combines the environment guard, the PDF "
    "working-paper export, the AI retry layer and one flagship standard - "
    "IFRS 16. That is roughly one release-day of plumbing plus one "
    "authoring pass, and it hardens everything this audit measured while "
    "advancing the reference library. Test of Control depth (verdict "
    "history and screening mode) and the second flagship (IFRS 9) then "
    "anchor v39, with the Arabic ToC library editions landing alongside "
    "whenever authoring capacity allows."
)

# ------------------------------------------------------------------ Section 5
SEC5_TIMELINE = [
    ("v20", "Exam engine: blueprint, SRS, ISA spine, Arabic depth pass"),
    ("v21", "IFRS 18 and Egypt regulation Arabic parity"),
    ("v22", "Past-paper question bank (366-check suite)"),
    ("v23", "ACCA deep past papers"),
    ("v24", "CFA / CMA / CPA skills bank"),
    ("v25", "Template-driven question generator families"),
    ("v26", "Flagship pools and generated podcast courses"),
    ("v27", "Podcast studio and bilingual episodes"),
    ("v28", "Edge TTS voices verified and wired"),
    ("v29", "Engagement tuning pass"),
    ("v30", "Shareable deep links and IFRS depth wave one"),
    ("v31", "IFRS Summaries beyond 750 blocks"),
    ("v32", "All 41 standards lifted past 45 blocks"),
    ("v33", "Service-worker self-heal for stale caches"),
    ("v34", "The real DipIFR past papers 2013-2025"),
    ("v35", "Sameh Zidan exams open inside the website"),
    ("v36", "IFRS 15 rewritten to the notes-PDF depth (110 blocks)"),
    ("v37", "Test of Control: 45 industries, verdict engine, AI generator"),
]

SEC5_REPRO_INTRO = (
    "Any future audit can be reproduced from a clean clone with the "
    "commands below, in order, in under ten minutes of wall-clock time. "
    "The restore step is idempotent and safe to re-run; the battery gates "
    "on it, which is exactly why the auto-restore guard is recommended."
)

SEC5_REPRO_COMMANDS = [
    "# 1. restore the content database (idempotent)",
    "bun scripts/restore-local-db.ts",
    "",
    "# 2. static gates",
    "bunx tsc --noEmit && bunx eslint .",
    "",
    "# 3. full regression battery - 21 suites, 2,117 checks",
    "bun run test",
    "",
    "# 4. end-to-end walkthrough of the newest feature (boots the app)",
    "bash scripts/e2e-v37.sh",
]

SEC5_CLOSE = (
    "The campaign's conclusion can be stated in one sentence: version 37 is "
    "the healthiest state the product has ever been verified in, with "
    "every layer of its own test architecture green and the deployment "
    "proven current - which makes this exactly the right moment to spend "
    "capacity on depth (flagship standards, Arabic editions) and reach "
    "(PDF working papers, verdict history) rather than on repairs."
)
