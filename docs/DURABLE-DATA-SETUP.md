# Durable production data — the one-env-var upgrade

AuditEdge runs in two database modes, decided entirely by `DATABASE_URL`:

| Mode | When | User data on redeploys | Setup |
| --- | --- | --- | --- |
| **Snapshot / demo** (the default) | no `DATABASE_URL`, or a SQLite `file:` URL | ❌ resets — the serverless filesystem is ephemeral, the content snapshot re-restores | zero — this is the zero-config default |
| **Managed Postgres** (durable) | `DATABASE_URL` is a `postgres://…` string (Neon, Vercel Postgres, Supabase…) | ✅ survives every redeploy | one env var — see below |

Everything else is automatic: on the first build with a Postgres URL the
build switches the Prisma provider, pushes the schema, and **seeds the full
content** (41 courses · 990 lessons · 146 materials · 27 quizzes · the
2,685-question bank · the one workspace user) from the same sanitized
snapshot the demo mode restores from — so the durable site boots identical
to the demo site, except nothing is ever lost again. Seeding is idempotent:
it only fills **empty** tables, so re-runs and later redeploys never touch
your live data.

## The 3-step switch (≈ 5 minutes, free tier)

### 1. Create a free Neon Postgres database

1. Go to <https://neon.com> → sign up with GitHub (free tier is plenty —
   the content is ~40 MB).
2. **Create project** → name it `auditedge` → region: Frankfurt or Bahrain
   (closest to your users).
3. Open the project **Dashboard** → copy the **connection string** — it
   looks like:
   ```
   postgresql://neondb_owner:PASSWORD@ep-cool-name-123456.eu-central-1.aws.neon.tech/neondb?sslmode=require
   ```

   > Any managed Postgres works the same way — Vercel Postgres, Supabase,
   > Railway… the only requirement is a `postgres://` or `postgresql://` URL.

### 2. Set it in Vercel

1. Open your AuditEdge project on Vercel → **Settings → Environment
   Variables**.
2. Add:
   - **Name:** `DATABASE_URL`
   - **Value:** the connection string from step 1
   - **Environments:** Production (and Preview if you want previews durable
     too — use a separate Neon *branch* for preview to keep production
     clean).
3. Note: a project-level env var **overrides** the `vercel.json` default
   (`file:./db/custom.db`) — no other change is needed.

### 3. Redeploy and verify

1. **Deployments → latest → ⋯ → Redeploy** (or push any commit).
2. Watch the build log — you should see:
   ```
   [db-deploy] Postgres DATABASE_URL detected — switching provider + pushing schema
   [db-seed-postgres] managed DB is missing content — seeding from the snapshot
   ── Postgres content seed ──────────────────────
   courses          41
   lessons          990
   ...
   [db-seed-postgres] OK — user data on this database now survives redeploys
   ```
3. Verify from anywhere:
   ```bash
   curl https://YOUR-APP.vercel.app/api/health
   ```
   You want:
   ```json
   { "ok": true, "db": { "mode": "postgres", "durable": true,
       "counts": { "courses": 41, "lessons": 990, "bankQuestions": 2685, … } } }
   ```

That's it. AI conversations, exam sittings, study plans, lesson notes —
everything the SQLite demo mode used to wipe on every deploy is now
permanent, and every future `git push` deploys on top of living data.

## Notes & guardrails

- **The workspace backup still matters.** The Audit Program's engagement
  files (procedures, findings, sign-offs, the Closing Suite drafts) live in
  your **browser's localStorage by design** — that is what makes them work
  offline in the PWA. Use *Program → Close-out → Workspace backup* to move
  them between browsers/devices; the server database never touches them.
- **Rollback is trivial.** Delete the `DATABASE_URL` env var in Vercel and
  redeploy — you are back on the snapshot demo mode, no code changes.
- **Never commit a connection string.** It lives only in the Vercel
  dashboard (and your password manager).
- **The local dev environment is unaffected** — `bun run dev` keeps using
  `db/custom.db` exactly as before; the Postgres path only activates at
  build time when the env var is present.
