import { PrismaClient } from '@prisma/client'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { gunzipSync } from 'zlib'
import { join } from 'path'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
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

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    // only override the datasource when the Vercel /tmp database was
    // actually provisioned — everywhere else Prisma reads DATABASE_URL
    // from the environment exactly as before
    ...(provisionedUrl ? { datasourceUrl: provisionedUrl } : {}),
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
