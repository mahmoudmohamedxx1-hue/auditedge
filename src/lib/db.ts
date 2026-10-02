import { PrismaClient } from '@prisma/client'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { gunzipSync } from 'zlib'
import { join } from 'path'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
  /** v28 — resolves when the additive self-heal migrations have settled */
  dbHealed?: Promise<void>
}

/**
 * v28 — self-healing SQLite column migrations.
 *
 * A stale database (a restored backup, an older demo snapshot, a fresh
 * clone of db/custom.db from before a release) can miss columns that the
 * current Prisma schema declares. Prisma then throws on the first write
 * that touches one of them — v27 shipped `ExamSession.sections/written/
 * crMarks/crStatus` but the deployed snapshot predated it, so every
 * real-format paper sitting POST 500'd and the exam never opened.
 *
 * This guard inspects the live SQLite file (PRAGMA table_info) and adds
 * any missing columns with ALTER TABLE — idempotent, dependency-free and
 * safe to run on every boot. Additive columns land with their schema
 * defaults, exactly what `prisma db push` would do, so user data is never
 * touched. Postgres is skipped (the build-time db-deploy push handles it).
 *
 * The returned promise is awaited by getSessionUser(), which every
 * DB-writing route calls before touching Prisma — so no request can race
 * the ALTER TABLE.
 */
const ADDITIVE_MIGRATIONS: { table: string; column: string; ddl: string }[] = [
  // v27 — real-exam format sitting state
  { table: 'ExamSession', column: 'sections', ddl: `ALTER TABLE "ExamSession" ADD COLUMN "sections" TEXT NOT NULL DEFAULT '[]'` },
  { table: 'ExamSession', column: 'written', ddl: `ALTER TABLE "ExamSession" ADD COLUMN "written" TEXT NOT NULL DEFAULT '{}'` },
  { table: 'ExamSession', column: 'crMarks', ddl: `ALTER TABLE "ExamSession" ADD COLUMN "crMarks" TEXT NOT NULL DEFAULT '{}'` },
  { table: 'ExamSession', column: 'crStatus', ddl: `ALTER TABLE "ExamSession" ADD COLUMN "crStatus" TEXT NOT NULL DEFAULT ''` },
]

async function healSqliteSchema(client: PrismaClient): Promise<void> {
  for (const m of ADDITIVE_MIGRATIONS) {
    try {
      const cols = (await client.$queryRawUnsafe(
        `PRAGMA table_info("${m.table}")`
      )) as unknown as { name?: string }[]
      // table missing entirely (fresh DB before prisma db push) — nothing to heal
      if (!Array.isArray(cols) || cols.length === 0) continue
      if (cols.some((c) => c && c.name === m.column)) continue
      await client.$executeRawUnsafe(m.ddl)
      console.log(`[db] self-heal: added ${m.table}.${m.column}`)
    } catch (err) {
      console.error(`[db] self-heal failed for ${m.table}.${m.column}`, err)
    }
  }
}

/**
 * Vercel serverless provisioning.
 *
 * Two supported modes (P1-7):
 *
 * 1. MANAGED POSTGRES (recommended for real use): when the Vercel project
 *    sets DATABASE_URL to a postgres:// connection string (Neon, Supabase,
 *    Vercel Postgres …), this module does nothing special — Prisma talks to
 *    the managed database directly and user data SURVIVES redeploys. The
 *    schema is applied at build time by scripts/db-deploy.ts (`prisma db
 *    push` after switching the schema provider to postgresql).
 *
 * 2. SNAPSHOT FALLBACK (zero-config demo): with the default SQLite
 *    DATABASE_URL, the repo ships a sanitized content snapshot at
 *    prisma/auditedge-demo.db.gz (built by scripts/make-vercel-snapshot.ts).
 *    On first use it is gunzipped into TMPDIR, the one writable directory,
 *    and Prisma points at it there. Writes live for the life of the
 *    instance and reset on recycle — the demo is read-mostly by design.
 *    Users can export their data (Library → Your data) before a redeploy
 *    and import it back afterwards.
 *
 * Local dev and self-hosted production are untouched: the snapshot branch
 * only runs when Vercel's own VERCEL=1 marker is present.
 */
function isPostgresUrl(url: string | undefined): boolean {
  return typeof url === 'string' && /^postgres(ql)?:\/\//.test(url)
}

function provisionVercelDatabase(): string | undefined {
  if (process.env.VERCEL !== '1') return undefined
  // a managed Postgres database needs no snapshot — use it directly
  if (isPostgresUrl(process.env.DATABASE_URL)) return undefined

  try {
    const tmpDir = process.env.TMPDIR || '/tmp'
    const target = join(tmpDir, 'auditedge-demo.db')
    if (existsSync(target)) return 'file:' + target

    // cwd differs between build-time checks and the standalone server
    // bundle, so try the project-root-relative path at a few depths
    const candidates = [
      join(process.cwd(), 'prisma', 'auditedge-demo.db.gz'),
      join(process.cwd(), '..', 'prisma', 'auditedge-demo.db.gz'),
      join(process.cwd(), '..', '..', 'prisma', 'auditedge-demo.db.gz'),
    ]
    const snapshot = candidates.find((p) => existsSync(p))
    if (!snapshot) return undefined // snapshot not bundled → default env behavior

    writeFileSync(target, gunzipSync(readFileSync(snapshot)))
    console.log('[db] provisioned demo database at ' + target)
    return 'file:' + target
  } catch (err) {
    console.error('[db] demo database provisioning failed, using DATABASE_URL', err)
    return undefined
  }
}

const provisionedUrl = provisionVercelDatabase()

/** The datasource this process actually talks to (explicit override or env). */
const effectiveUrl = provisionedUrl ?? process.env.DATABASE_URL

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    // only override the datasource when the Vercel /tmp database was
    // actually provisioned — everywhere else Prisma reads DATABASE_URL
    // from the environment exactly as before
    ...(provisionedUrl ? { datasourceUrl: provisionedUrl } : {}),
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

/** v28 — kick off (or reuse) the additive SQLite self-heal. No-op promise
 * for Postgres datasources. Awaited inside getSessionUser() so no request
 * can race the ALTER TABLE. */
export const dbReady: Promise<void> =
  globalForPrisma.dbHealed ??
  (globalForPrisma.dbHealed = typeof effectiveUrl === 'string' && effectiveUrl.startsWith('file:')
    ? healSqliteSchema(db)
    : Promise.resolve())
