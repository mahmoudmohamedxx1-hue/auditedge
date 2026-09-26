# Changelog

All notable changes to AuditEdge Academy. Versions follow the app's internal
release history (each version shipped fully verified: `eslint` clean,
`tsc --noEmit` clean, production build green, automated suites passing).

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
