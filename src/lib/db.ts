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
 * The bundle filesystem on Vercel is read-only and recycled on cold start,
 * so the repo ships a sanitized content snapshot at
 * prisma/auditedge-demo.db.gz (built by scripts/make-vercel-snapshot.ts —
 * courses, modules, lessons, quizzes, materials and the single workspace
 * user; zero personal runtime data). On first use it is gunzipped into
 * TMPDIR, the one writable directory, and Prisma points at it there.
 *
 * Writes (lesson progress, quiz attempts, AI chats) live for the life of
 * the instance and reset on recycle — the public demo is read-mostly by
 * design. Local dev and self-hosted production are untouched: this branch
 * only runs when Vercel's own VERCEL=1 marker is present.
 */
function provisionVercelDatabase(): string | undefined {
  if (process.env.VERCEL !== '1') return undefined

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
