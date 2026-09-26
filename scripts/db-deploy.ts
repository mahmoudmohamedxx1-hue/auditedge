/**
 * Build-time database deployment step for Vercel (P1-7).
 *
 * When the Vercel project provides a Postgres DATABASE_URL (Neon, Supabase,
 * Vercel Postgres…), this script:
 *   1. switches the Prisma schema provider sqlite → postgresql (the file is
 *      rewritten inside the disposable build container, never committed),
 *   2. runs `prisma db push` so the schema exists in the managed database,
 *   3. regenerates the client for postgres.
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
console.log("[db-deploy] managed database is in sync — user data will survive redeploys")
