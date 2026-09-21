# Changelog

All notable changes to AuditEdge Academy. Versions follow the app's internal
release history (each version shipped fully verified: `eslint` clean,
`tsc --noEmit` clean, production build green, automated suites passing).

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
