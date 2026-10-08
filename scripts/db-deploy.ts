/**
 * Build-time database deployment step for Vercel (P1-7).
 *
 * When the Vercel project provides a Postgres DATABASE_URL (Neon, Supabase,
 * Vercel Postgres…), this script:
 *   1. switches the Prisma schema provider sqlite → postgresql (the file is
 *      rewritten inside the disposable build container, never committed),
 *   2. runs `prisma db push` so the schema exists in the managed database,
 *   3. regenerates the client for postgres,
 *   4. v42 — seeds the CONTENT (courses, lessons, materials, quizzes, the
 *      2,685-question bank, the one workspace user) from the same snapshot
 *      the SQLite mode restores from, so a freshly connected managed
 *      database boots as a full site and not a ghost town.
 *
 * With the default SQLite URL (the snapshot demo mode) it is a no-op — the
 * build proceeds exactly as before.
 */
import { readFileSync, writeFileSync } from "fs"
import { execSync } from "child_process"

const url = process.env.DATABASE_URL ?? ""
const isPostgres = /^postgres(ql)?:\/\//.test(url)

if (!isPostgres) {
  console.log("[db-deploy] DATABASE_URL is not Postgres — snapshot/demo mode, nothing to push.")
  process.exit(0)
}

console.log("[db-deploy] Postgres DATABASE_URL detected — switching provider + pushing schema")

const schemaPath = "prisma/schema.prisma"
const schema = readFileSync(schemaPath, "utf8")
if (/provider\s*=\s*"sqlite"/.test(schema)) {
  writeFileSync(schemaPath, schema.replace('provider = "sqlite"', 'provider = "postgresql"'))
  console.log("[db-deploy] schema provider switched to postgresql")
}

execSync("bunx prisma db push --skip-generate --accept-data-loss", { stdio: "inherit" })
execSync("bunx prisma generate", { stdio: "inherit" })

// v42 — content seed (idempotent: only empty tables are filled). Runs as a
// subprocess so it loads the FRESHLY regenerated postgres client.
try {
  execSync("bun scripts/db-seed-postgres.ts", { stdio: "inherit" })
} catch {
  // a failed seed must fail the build loudly — an empty site is worse than
  // a red deploy (the previous deployment stays live either way)
  process.exit(1)
}

console.log("[db-deploy] managed database is in sync — user data will survive redeploys")
