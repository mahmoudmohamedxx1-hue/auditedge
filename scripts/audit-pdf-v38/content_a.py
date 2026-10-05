"""Content part A — Executive Summary + Section 1 (verification campaign).

AuditEdge Academy v38 state-of-project audit, October 2026.
All numbers verified live during the campaign of 5-6 October 2026.
"""

# ------------------------------------------------------------------ Executive
EXEC_INTRO = (
    "Two questions drove this campaign: after shipping v38 - the release "
    "that implemented all five recommendations of the previous audit - "
    "<b>where does the product actually stand</b>, and <b>what should the "
    "next releases do with that position</b>? To answer them honestly, the "
    "entire verification architecture of the project was re-run from "
    "scratch rather than trusting the release notes: static analysis, the "
    "database environment guard, the full regression battery, a live "
    "browser end-to-end walkthrough, production probes against the "
    "deployed build, and a fresh census of every content asset. Nothing "
    "was taken on faith, and one thing the campaign found was not in any "
    "release note at all."
)

STATS_ROW_1 = [
    ("2,204", "AUTOMATED CHECKS · 22 SUITES · 0 FAILURES"),
    ("18 / 18", "BROWSER END-TO-END CHECKS PASSING"),
    ("38.0.0", "LIVE IN PRODUCTION (SW STAMP VERIFIED)"),
]

STATS_ROW_2 = [
    ("76,662", "LINES OF TYPESCRIPT UNDER TEST"),
    ("2,160", "IFRS BLOCKS · 41 STANDARDS · 2 FLAGSHIPS"),
    ("2,685", "EXAM QUESTIONS · 87% BILINGUAL"),
]

EXEC_FINDING = (
    "<b>The headline finding is positive with one asterisk.</b> Every "
    "layer that can be run locally or probed remotely is green: the type "
    "checker and linter are clean, the auto-restore database guard that "
    "v38 introduced works exactly as designed (it passed both its "
    "standalone probe and its place in the e2e boot path), the battery "
    "grew from 21 suites and 2,117 checks to 22 suites and 2,204 checks "
    "with zero failures, all 18 browser end-to-end checks pass against a "
    "real running instance, and the production deployment is verifiably "
    "current - the service worker stamps auditedge-v38, the version "
    "constant 38.0.0 is present in the served JavaScript chunks, and the "
    "v38 feature strings (the ICQ print engine, the program bridge, the "
    "IFRS 16 rewrite) are all in the code the live site ships to users. "
    "The asterisk: <b>the project's own CI pipeline has failed 23 "
    "consecutive times</b> - every push since 27 September - and nobody "
    "noticed, because deployments go through Vercel and never touch CI. "
    "The failure is not a code defect: the CI job runs the battery "
    "against an empty scratch database, tripping the exact 15 zero-count "
    "failures the v37 audit diagnosed and v38's guard fixed locally - "
    "but the workflow was never updated to call the guard. The two most "
    "recent runs fail differently still: GitHub never assigned them a "
    "hosted runner, and after fifteen minutes of waiting they were "
    "cancelled. The product is verified; the verification itself is not "
    "yet automated end to end. That is the single highest-value fix "
    "available, and it costs a few lines of YAML."
)

EXEC_RECS = (
    "The roadmap that follows from this state is unusually clear. "
    "Immediately: repair CI by wiring the existing database guard into "
    "the workflow, fix its corrupted branch filter, pin the runner "
    "image, and make the check required - turning the 2,204-check moat "
    "into an always-on gate instead of a manual ritual. Next release: a "
    "third IFRS flagship to the 98-block depth bar (IFRS 9 is the "
    "natural candidate by exam weight), the print engine generalized "
    "beyond the questionnaire to audit programs and findings lists, and "
    "a guided engagement flow that connects the pieces v37 and v38 built "
    "into one continuous fieldwork journey. The strategic horizon - "
    "multi-user workspaces, durable production data, offline-first "
    "fieldwork - is about who the product serves rather than what it "
    "contains, and each item now has a concrete starting point in the "
    "codebase."
)

# ------------------------------------------------------------------ Section 1
SEC1_METHOD = (
    "The campaign applied the same discipline as the v37 audit, with one "
    "layer added. <b>Layer one</b> is static: the TypeScript compiler and "
    "ESLint over the whole tree. <b>Layer two</b> is environmental: the "
    "v38 database guard, exercised both as a standalone command and from "
    "inside the e2e boot sequence, because a guard that only works in "
    "one path is half a guard. <b>Layer three</b> is the regression "
    "battery - twenty-two suites chained into a single command. "
    "<b>Layer four</b> is end-to-end: a real browser driving the running "
    "application through the newest features. <b>Layer five</b> is "
    "production: HTTP probes, service-worker inspection, and chunk-level "
    "string verification against the deployed build. The layer the v37 "
    "audit performed manually and this one formalizes is the sixth: "
    "repository infrastructure - the state of CI, which turned out to "
    "hold the campaign's only red finding."
)

SEC1_STATIC = (
    "Both gates pass clean on the v38 tree. <code>tsc --noEmit</code> "
    "reports no errors across the 76,662-line source tree, and ESLint "
    "exits zero with no warnings. A supplementary debt scan found "
    "<b>zero TODO, FIXME, HACK or XXX markers</b> anywhere in src/ - the "
    "codebase carries no acknowledged technical debt in the conventional "
    "marker sense, which is unusual for a project of this age and is "
    "worth stating plainly: debt here lives in architecture decisions "
    "(documented in the risk register of chapter 4), not in flagged "
    "code smells. The repository itself is disciplined too - a clean "
    "working tree, thirty-three commits on main, and the v38 release "
    "commit (bbe58a8) pushed and confirmed identical on origin."
)

SEC1_DB_STORY = (
    "The v37 audit opened with an embarrassing discovery: its own first "
    "battery run failed fifteen checks because a fresh sandbox ships an "
    "empty 274 KB database skeleton while the real content lives in a "
    "19.6 MB gzipped snapshot that had to be restored by hand. v38 "
    "shipped the fix - <code>scripts/ensure-db.ts</code>, a guard that "
    "probes the database (a size fast-path, then bank and course counts) "
    "and restores the snapshot automatically when things look thin, "
    "wired into <code>predev</code> and the dev boot scripts. This "
    "campaign verified the guard in three states. Against the healthy "
    "20.5 MB database it fast-pathed in milliseconds, reporting "
    "bank=2685 courses=41 and touching nothing. Inside the e2e boot "
    "path it ran green before the server started. And the battery that "
    "followed it passed every database-dependent check - the failure "
    "mode that produced fifteen red lines a version ago now cannot "
    "occur on any machine that boots the project normally. The irony "
    "that CI still suffers the exact failure this guard eliminates is "
    "examined in chapter 4."
)

SEC1_BATTERY_TABLE = [
    ("sectors-v15 · audit program library", "515", "0 failures"),
    ("v23 · ACCA deep past papers", "382", "0 failures"),
    ("v22 · past-paper question bank", "366", "0 failures"),
    ("v38 · resilience, IFRS 16, print, bridge", "87", "0 failures"),
    ("v37 · Test of Control", "75", "0 failures"),
    ("v24 · CFA/CMA/CPA skills bank", "70", "0 failures"),
    ("v27 · podcast courses", "68", "0 failures"),
    ("v30 · deep links + exam archive", "67", "0 failures"),
    ("v26 · flagship pools", "66", "0 failures"),
    ("v32 · IFRS all-41 depth", "57", "0 failures"),
    ("v25 · question generator", "51", "0 failures"),
    ("v34 · DipIFR past papers", "48", "0 failures"),
    ("v20 · exam engine + SRS + ISA spine", "47", "0 failures"),
    ("v36 · IFRS 15 flagship depth", "45", "0 failures"),
    ("v31 · IFRS Summaries", "44", "0 failures"),
    ("v35 · in-app exam viewer", "43", "0 failures"),
    ("v21 · IFRS 18 + Egypt Arabic parity", "32", "0 failures"),
    ("v28 · edge TTS voices", "31", "0 failures"),
    ("models-v15 · AI registry + live routing", "31", "0 failures"),
    ("engagement-v12", "28", "0 failures"),
    ("analyzer-v11 · trial balance", "27", "0 failures"),
    ("v29 · engagement smoke", "24", "0 failures"),
]

SEC1_BATTERY_AFTER = (
    "Two details make this run more meaningful than the raw total. "
    "First, the arithmetic of growth is exactly accounted for: v37 "
    "closed at 2,117 checks across 21 suites, v38 adds its own "
    "87-check suite, and the battery lands at 2,204 across 22 - every "
    "prior suite carried forward unmodified and still green, which is "
    "the real test of a regression architecture (old locks must keep "
    "working when new ones are cut). Second, the models suite performs "
    "<b>live AI calls</b> against the keyless pool as part of the "
    "battery - and this run completed without a single 429, with the "
    "workspace engine serving GLM answers and the vision check routing "
    "through the ovh-vision engine. The previous audit watched that "
    "suite pass while absorbing live rate-limit errors; the v38 backoff "
    "layer plus a healthier pool made this run clean, which is "
    "circumstantial but encouraging evidence that the resilience work "
    "is doing its job."
)

SEC1_E2E_INTRO = (
    "The browser suite (scripts/e2e-v38.sh) boots the real application "
    "and drives it through the release's flagship paths with a "
    "headless agent browser. All eighteen checks passed:"
)

SEC1_E2E_BULLETS = [
    ("Boot integrity.",
     "The ensure-db guard ran green inside the boot sequence, the "
     "server came up, and the sidebar displays the v38 release badge."),
    ("The questionnaire engine.",
     "A banking Test-of-Control questionnaire rendered with both core "
     "and industry module sections intact."),
    ("Blank ICQ print.",
     "The new print action built an A4 fieldwork copy with 102 "
     "tick-boxes (three per question), a notes column, and the "
     "fieldwork instruction note."),
    ("Verdict print.",
     "After answering, the run produced a STRONG verdict at 100%, and "
     "the report print renders the verdict banner, the weighted "
     "score, and the answers marked directly on the boxes."),
    ("The bridge.",
     "From the verdict view, the bridge button navigated to the audit "
     "program view, the customizer opened automatically, the industry "
     "was pre-filled from the questionnaire, and the concerns carried "
     "the live ICQ verdict context - the intended questionnaire-to-"
     "program handoff, verified end to end."),
    ("Arabic parity.",
     "The app hydrated fully right-to-left in Arabic, the Arabic "
     "Academy family renders with all 22 courses, 402 SVG covers "
     "painted in the main area, and the navigation shell localizes "
     "completely."),
]

SEC1_PROD_INTRO = (
    "The deployment at auditedge-snowy.vercel.app was probed at the "
    "HTTP and chunk level to confirm the live site is the v38 build "
    "and not a stale artifact:"
)

SEC1_PROD_TABLE = [
    ("Root URL", "HTTP 200 in 39 ms (15.9 KB shell)"),
    ("Service worker cache stamp", "auditedge-v38 (current)"),
    ("Version constant in served chunks", "38.0.0 present"),
    ("v38 feature strings in chunks", "ICQ print, program bridge, IFRS 16 all found"),
    ("ToC generate API guard", "400 on invalid body (correct)"),
    ("Bank API", "200 - 2,685 questions, 2,330 with Arabic"),
    ("Bank area split", "accounting 1,668 · auditing 640 · ethics 274 · Egypt 103"),
    ("Bootstrap API", "HTTP 200"),
    ("Web manifest", "200, application/manifest+json"),
    ("Exam paper sample (2024-12)", "200, application/pdf, 966 KB"),
    ("CI pipeline (GitHub Actions)", "FAILED - 23 consecutive runs (see ch. 4)"),
]
