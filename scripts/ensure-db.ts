/**
 * v38 — the auto-restore DB guard.
 *
 * The v37 state-of-project audit caught a silent killer: fresh sandboxes and
 * clones boot with db/custom.db as a ~274 KB EMPTY SKELETON while the repo
 * ships the full content snapshot at prisma/auditedge-demo.db.gz (19.6 MB —
 * 2,685 bank questions, 41 courses, 990 lessons, 27 quizzes). Nothing
 * crashed; every content surface was just quietly zero. The battery only
 * passed again after scripts/restore-local-db.ts was run BY HAND.
 *
 * This guard makes that restore automatic and idempotent:
 *   - healthy DB (≥ 800 bank questions, ≥ 40 courses) → exits 0 in ~2s
 *   - missing / skeleton / thin DB → restores the snapshot, verifies it,
 *     exits 0 — or exits 1 when the snapshot itself is bad (loud, on purpose)
 *
 * Safety rails:
 *   - NEVER runs on Vercel (production provisions its own snapshot via
 *     src/lib/db.ts, mode 2) or against a managed Postgres DATABASE_URL
 *   - only writes db/custom.db, never any other datasource
 *
 * Run:      bun scripts/ensure-db.ts
 * Wired in: package.json `predev` + scripts/dev-clean.sh (so a direct
 *           `bash scripts/dev-clean.sh` boot is guarded too)
 */
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { gunzipSync } from "node:zlib"
import { join } from "node:path"
import { PrismaClient } from "@prisma/client"

const root = process.cwd()
const dbPath = join(root, "db", "custom.db")
const snapshotPath = join(root, "prisma", "auditedge-demo.db.gz")

/** Below these counts the DB is a skeleton/thin file, not the real content. */
const MIN_BANK = 800
const MIN_COURSES = 40
/** A skeleton is ~274 KB; the real content snapshot is ~20 MB gunzipped. */
const MIN_HEALTHY_BYTES = 5_000_000

// never touch a managed Postgres or a Vercel deployment
const url = process.env.DATABASE_URL ?? ""
if (process.env.VERCEL === "1" || /^postgres(ql)?:\/\//.test(url)) {
  console.log("[ensure-db] managed/Vercel database — nothing to guard")
  process.exit(0)
}

async function counts(): Promise<{ bank: number; courses: number } | null> {
  const db = new PrismaClient()
  try {
    const [bank, courses] = await Promise.all([db.bankQuestion.count(), db.course.count()])
    return { bank, courses }
  } catch {
    // missing tables / unreadable file — that is a "needs restore", not a crash
    return null
  } finally {
    await db.$disconnect()
  }
}

async function main() {
  // 1. fast size probe first — a count query against a missing file is slow noise
  if (existsSync(dbPath) && statSync(dbPath).size >= MIN_HEALTHY_BYTES) {
    const c = await counts()
    if (c && c.bank >= MIN_BANK && c.courses >= MIN_COURSES) {
      console.log(`[ensure-db] healthy — bank=${c.bank} courses=${c.courses}`)
      return
    }
    if (c) console.log(`[ensure-db] thin DB (bank=${c.bank} courses=${c.courses}) — restoring`)
  } else {
    console.log(
      `[ensure-db] ${existsSync(dbPath) ? "skeleton-size" : "missing"} db/custom.db — restoring`
    )
  }

  // 2. restore from the shipped snapshot
  if (!existsSync(snapshotPath)) {
    console.error(`[ensure-db] snapshot missing: ${snapshotPath} — cannot restore`)
    process.exit(1)
  }
  const raw = gunzipSync(readFileSync(snapshotPath))
  writeFileSync(dbPath, raw)
  console.log(`[ensure-db] restored ${(raw.length / 1024 / 1024).toFixed(2)} MB from the snapshot`)

  // 3. verify the restore actually landed
  const c = await counts()
  if (!c || c.bank < MIN_BANK || c.courses < MIN_COURSES) {
    console.error(
      `[ensure-db] restore verified thin (bank=${c?.bank} courses=${c.courses}) — snapshot may be stale`
    )
    process.exit(1)
  }
  console.log(`[ensure-db] OK — bank=${c.bank} courses=${c.courses}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
