"""Report prose — part A: Executive Summary + Section 1 (Verification Campaign).

All strings are plain ASCII English. Rich formatting uses ReportLab
intra-paragraph tags (<b>, <i>) only.
"""

EXEC_INTRO = (
    "AuditEdge Academy stands at version 37.0.0, live in production at "
    "auditedge-snowy.vercel.app, with the Test of Control section - the newest "
    "flagship feature - shipped, verified and deployed. This report answers two "
    "questions with evidence rather than impressions: where exactly is the "
    "product today, and what should be built next. To answer them, every layer "
    "of verification the project owns was executed in a single campaign: static "
    "type and lint analysis, the full 21-suite regression battery, a live "
    "browser end-to-end walkthrough of the newest feature, and direct probes of "
    "the production deployment. The headline is unambiguous: every layer is "
    "green. The only defect surfaced in the entire campaign was an environment "
    "issue - an empty sandbox database - not a code defect, and it was "
    "diagnosed and repaired within minutes."
)

EXEC_FINDING = (
    "One operational finding deserves attention before anything else. In a "
    "fresh working environment the local SQLite database starts as a 274 KB "
    "skeleton, and the regression battery will report fifteen content failures "
    "- every one a zero count - until the shipped 4.2 MB content snapshot is "
    "restored. The restore is a single idempotent command, but nothing today "
    "performs it automatically. Making the test chain self-heal on this "
    "condition is the cheapest reliability win available and sits first on the "
    "recommendation list."
)

EXEC_RECS = (
    "Three recommendations follow from the full analysis. First, harden the "
    "environment: auto-restore the content snapshot when the bank query returns "
    "zero, and add retry with backoff to the AI pool, which showed live "
    "rate-limiting (HTTP 429) during the model-registry probe. Second, keep "
    "deepening the reference library on the proven v36 pattern: IFRS 15 was "
    "rewritten to flagship depth (110 blocks) in v36, and IFRS 16, IFRS 9, "
    "IAS 12 and IAS 19 are the natural next candidates. Third, grow the Test "
    "of Control section from its strong v37 baseline into a fieldwork "
    "platform: PDF export of the ICQ working paper, verdict history per "
    "entity, and Arabic editions of the industry library."
)

STATS_ROW_1 = [
    ("75,783", "Lines of TypeScript in src/"),
    ("22", "Views in the hash router"),
    ("2,117", "Regression checks, all passing"),
    ("45", "Industries in the ToC library"),
]

STATS_ROW_2 = [
    ("2,125", "IFRS revision blocks (41 standards)"),
    ("2,685", "Bank questions in the exam engine"),
    ("990", "Lessons across 41 courses"),
    ("30", "Self-hosted DipIFR exam papers"),
]

# ------------------------------------------------------------------ Section 1
SEC1_METHOD = (
    "The campaign was designed as four independent layers, so that a defect "
    "missed by one layer would be caught by the next. Static analysis proves "
    "the code compiles and conforms to style; the regression battery proves "
    "behaviour - engines, scoring, content integrity, generators - against "
    "2,117 assertions; the end-to-end layer drives a real browser through the "
    "newest user-facing feature, including a live AI generation; and the "
    "production probes confirm that what is deployed on Vercel is actually the "
    "version we think it is, serving the assets users reach for. Each layer "
    "ran to completion on 5-6 October 2026 inside the development sandbox, "
    "against the same commit (0fa90ae) that production serves."
)

SEC1_STATIC = (
    "Two gates guard every change before it can ship, and both passed clean "
    "on the current tree. The TypeScript compiler (tsc --noEmit) reports zero "
    "errors across the entire 75,783-line source tree - no unsound "
    "narrowing, no broken imports, no silent any-leaks. ESLint over the same "
    "tree reports zero violations. Neither tool produced a single warning "
    "worth triaging, which is consistent with the project's discipline: every "
    "one of the 31 commits shipped through these same gates before this audit "
    "ever ran."
)

SEC1_DB_STORY = (
    "The regression chain told a cautionary tale worth recording. On its "
    "first run the v20 suite reported fifteen failures - but every failing "
    "check was a content count of exactly zero: no bank questions, no "
    "courses, no lessons, no quizzes. That pattern does not describe broken "
    "code; it describes an empty database. The sandbox's local db/custom.db "
    "was a 274 KB skeleton, created by a schema push but never seeded. The "
    "shipped content snapshot (prisma/auditedge-demo.db.gz, 4.2 MB "
    "compressed, 19.59 MB restored) was reloaded with the project's "
    "idempotent restore script, which itself verifies the counts it finds: "
    "2,685 bank questions, 41 courses, 990 lessons, 27 quizzes. The chain "
    "was then re-run end to end and finished with exit code zero."
)

SEC1_BATTERY_TABLE = [
    ("sectors-v15 - audit program library", "515", "PASS"),
    ("v23 - ACCA deep past papers", "382", "PASS"),
    ("v22 - past-paper bank", "366", "PASS"),
    ("v24 - CFA / CMA / CPA skills bank", "70", "PASS"),
    ("v37 - Test of Control", "75", "PASS"),
    ("v27 - podcast courses and bank", "68", "PASS"),
    ("v30 - deep links and exam archive", "67", "PASS"),
    ("v26 - flagship question pools", "66", "PASS"),
    ("v32 - IFRS all-41 depth floor", "57", "PASS"),
    ("v25 - question generator families", "51", "PASS"),
    ("v20 - exam engine, SRS, ISA spine", "47", "PASS"),
    ("v34 - DipIFR past papers 2013-2025", "48", "PASS"),
    ("v36 - IFRS 15 flagship depth", "45", "PASS"),
    ("v31 - IFRS Summaries first wave", "44", "PASS"),
    ("v35 - in-app exam viewer", "43", "PASS"),
    ("v21 - IFRS 18 and Egypt Arabic parity", "32", "PASS"),
    ("v28 - edge TTS voices", "31", "PASS"),
    ("models-v15 - AI model registry", "31", "PASS"),
    ("engagement-v12 - engagement loop", "28", "PASS"),
    ("analyzer-v11 - trial balance analyzer", "27", "PASS"),
    ("v29 - engagement smoke", "24", "PASS"),
]

SEC1_BATTERY_AFTER = (
    "The table and Figure 1 show the full distribution. The heaviest suites "
    "are the sector-program library (515 checks across the audit programs, "
    "their risk mappings and account families) and the two past-paper suites "
    "(366 and 382 checks), which validate question format, answer keys, "
    "difficulty ladders and bilingual variants item by item. The newest "
    "suite - v37, guarding the Test of Control - contributes 75 checks of "
    "its own, spanning the industry library's structural integrity (45 "
    "industries, 10 sectors, 496 unique questions, no colliding ids) and the "
    "verdict engine's scoring rules, including the normalizer that repairs "
    "malformed AI output. Summed across all 21 suites the campaign executed "
    "2,117 checks with zero failures."
)

SEC1_E2E_INTRO = (
    "The end-to-end layer boots the real application - a Next.js dev server, "
    "a real browser, real API routes and the live AI pool - and walks the "
    "Test of Control feature exactly the way a user would. Nineteen checks "
    "passed and none failed. The walkthrough is reproduced here in four "
    "groups because it doubles as a feature tour of the newest section."
)

SEC1_E2E_BULLETS = [
    (
        "Navigation and discovery.",
        "The sidebar shows the v37 release badge and the new Test of Control "
        "entry; the library tab renders industry cards across all ten "
        "sectors, from agriculture to awqaf; typing a search term narrows 45 "
        "industries to the matching card; the sector chip filter isolates "
        "one sector's cards.",
    ),
    (
        "The questionnaire.",
        "Opening Banking writes its shareable deep link (#/toc?ind=banking); "
        "the full instrument renders 34 questions - the 22-question COSO and "
        "ITGC core plus the 12-question banking module - with three answer "
        "options each; the Evaluate button stays disabled until every "
        "question is answered.",
    ),
    (
        "The verdict engine.",
        "Answering everything Yes completes the instrument and returns a "
        "Strong control environment at 100 percent with zero critical "
        "failures; the domain score bars, the gap list with remediation "
        "hints, the corroborating procedures and the one-click markdown "
        "export all render on the results page.",
    ),
    (
        "The AI generator.",
        "The form gates Generate on a non-empty industry description; the "
        "API rejects an empty payload with HTTP 400; a real custom request - "
        "solar panel cleaning services, an SME with 40 field staff across "
        "three cities scheduling in Excel - returned a structurally valid "
        "questionnaire of 16 questions and 8 procedures spanning all six "
        "COSO domains, which then scored through the same verdict engine.",
    ),
]

SEC1_PROD_INTRO = (
    "The final layer asked the internet what it is actually serving, and "
    "confirmed the deployment is genuinely current. The service worker "
    "stamps itself auditedge-v37; the built JavaScript chunks served from "
    "the CDN contain both the literal string \"Test of Control\" and the "
    "version constant 37.0.0; the new AI route is deployed and enforcing "
    "its input guard; the exam archive serves PDFs with the correct MIME "
    "type; and the homepage answers in under a second. In short: what the "
    "local suites verify is what the world is being served."
)

SEC1_PROD_TABLE = [
    ("Homepage GET /", "HTTP 200 in 0.88 s, 15.9 KB shell"),
    ("Service worker version stamp", "auditedge-v37"),
    ("Version constant in served chunks", "37.0.0 found in deployed bundle"),
    ("Test of Control UI string in chunks", "Present in deployed bundle"),
    ("POST /api/ai/toc-generate, empty payload", "HTTP 400 - input guard live"),
    ("GET /exams/dipifr/2024-12.pdf", "HTTP 200, application/pdf, 966 KB"),
    ("GET /manifest.webmanifest", "HTTP 200"),
]
