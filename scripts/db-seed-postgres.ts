/**
 * v42 — Seed the managed Postgres database with the site's CONTENT.
 *
 * The problem this solves: with a Postgres DATABASE_URL (Neon / Vercel
 * Postgres / Supabase), scripts/db-deploy.ts pushes the SCHEMA at build
 * time but seeds NOTHING — a freshly connected managed database boots as
 * a ghost town (0 courses, 0 lessons, 0 bank questions) even though user
 * data would now survive redeploys. The SQLite mode never had this
 * problem because the repo ships the full content snapshot it restores
 * from; this script gives Postgres the same content from the exact same
 * snapshot, so switching to durable storage is a one-env-var change with
 * an identical site.
 *
 * How it works:
 *   1. guarded — only runs against a postgres:// DATABASE_URL
 *   2. idempotent — every content table is seeded ONLY when it is empty
 *      (normal case: a fresh Neon database is fully empty; a re-run after
 *      a partial failure picks up the missing tables)
 *   3. reads prisma/auditedge-demo.db.gz (the sanitized content snapshot),
 *      gunzips it to the OS temp dir and opens it read-only through
 *      bun:sqlite
 *   4. maps SQLite's raw 0/1 booleans and epoch-ms dates to the types the
 *      Postgres client expects, then createMany's each table in chunks,
 *      in FK order: User → Course → Module → Lesson → Material → Quiz →
 *      BankQuestion
 *
 * Run standalone:   DATABASE_URL=postgres://… bun scripts/db-seed-postgres.ts
 * Wired in:         scripts/db-deploy.ts (Postgres mode only, after the
 *                   schema push + client regeneration)
 */
import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import { PrismaClient } from "@prisma/client"

const url = process.env.DATABASE_URL ?? ""
if (!/^postgres(ql)?:\/\//.test(url)) {
  console.log("[db-seed-postgres] DATABASE_URL is not Postgres — nothing to seed (snapshot mode self-restores).")
  process.exit(0)
}

const SNAPSHOT = join(process.cwd(), "prisma", "auditedge-demo.db.gz")

/** SQLite raw value → JS boolean (Prisma stores 0/1). */
const toBool = (v: unknown): boolean => v === 1 || v === true || v === "1"

/** SQLite raw value → Date (Prisma stores epoch ms; be liberal on reads). */
const toDate = (v: unknown): Date | null => {
  if (v == null) return null
  if (v instanceof Date) return v
  if (typeof v === "number") return new Date(v)
  if (typeof v === "string") {
    const n = Number(v)
    if (v.trim() !== "" && !Number.isNaN(n)) return new Date(n)
    const d = new Date(v)
    if (!Number.isNaN(d.getTime())) return d
  }
  return null
}

type TableSpec = {
  /** the sqlite table name (== the Prisma model name) */
  table: string
  /** bool columns to coerce */
  bools?: string[]
  /** DateTime columns to coerce */
  dates?: string[]
  /** log label */
  label: string
  /** minimum healthy count — below this the seed is reported as failed */
  min?: number
}

/** FK order matters: User → Course → Module → Lesson → Material → Quiz → Bank */
const TABLES: TableSpec[] = [
  { table: "User", label: "users", bools: ["isDemo"], dates: ["lastActiveAt", "createdAt", "updatedAt", "lastLessonAt"] },
  { table: "Course", label: "courses", bools: ["featured", "published", "supplementary"], min: 40 },
  { table: "Module", label: "modules" },
  { table: "Lesson", label: "lessons", min: 900 },
  { table: "Material", label: "materials", bools: ["hasFile"], dates: ["createdAt"], min: 100 },
  { table: "Quiz", label: "quizzes" },
  { table: "BankQuestion", label: "bank questions", dates: ["createdAt"], min: 800 },
]

const CHUNK = 200

async function main() {
  const db = new PrismaClient()

  try {
    /* ---- 1. is there anything to do? ---- */
    const [courses, lessons, bank] = await Promise.all([
      db.course.count(),
      db.lesson.count(),
      db.bankQuestion.count(),
    ])
    if (courses >= 40 && lessons >= 900 && bank >= 800) {
      console.log(`[db-seed-postgres] content already present (courses=${courses} lessons=${lessons} bank=${bank}) — nothing to do`)
      return
    }
    console.log(`[db-seed-postgres] managed DB is missing content (courses=${courses} lessons=${lessons} bank=${bank}) — seeding from the snapshot`)

    if (!existsSync(SNAPSHOT)) {
      console.error(`[db-seed-postgres] snapshot missing: ${SNAPSHOT} — cannot seed`)
      process.exit(1)
    }

    /* ---- 2. open the snapshot read-only through bun:sqlite ---- */
    const tmpDb = join(tmpdir(), "auditedge-seed-source.db")
    writeFileSync(tmpDb, gunzipSync(readFileSync(SNAPSHOT)))
    const { Database } = (await import("bun:sqlite")) as { Database: new (path: string, opts?: unknown) => SQLiteLike }
    const sqlite = new Database(tmpDb, { readonly: true, create: false })

    /* ---- 3. seed every EMPTY table, in FK order ---- */
    const report: { label: string; seeded: number; skipped: boolean }[] = []
    for (const spec of TABLES) {
      const existing = await (db as unknown as Record<string, { count: () => Promise<number> }>)[spec.table]?.count?.()
      if (typeof existing === "number" && existing > 0) {
        report.push({ label: spec.label, seeded: existing, skipped: true })
        continue
      }

      let rows: Record<string, unknown>[] = []
      try {
        rows = sqlite.query(`SELECT * FROM "${spec.table}"`).all() as Record<string, unknown>[]
      } catch (e) {
        console.warn(`[db-seed-postgres] could not read ${spec.table} from the snapshot — ${e instanceof Error ? e.message : e}`)
        report.push({ label: spec.label, seeded: 0, skipped: true })
        continue
      }
      if (rows.length === 0) {
        report.push({ label: spec.label, seeded: 0, skipped: true })
        continue
      }

      const mapped = rows.map((r) => {
        const out: Record<string, unknown> = { ...r }
        for (const b of spec.bools ?? []) if (b in out) out[b] = toBool(out[b])
        for (const d of spec.dates ?? []) if (d in out) out[d] = toDate(out[d])
        return out
      })

      const model = (db as unknown as Record<string, { createMany: (a: { data: unknown[]; skipDuplicates?: boolean }) => Promise<{ count: number }> }>)[spec.table]
      let inserted = 0
      for (let i = 0; i < mapped.length; i += CHUNK) {
        const res = await model.createMany({ data: mapped.slice(i, i + CHUNK), skipDuplicates: true })
        inserted += res.count
      }
      report.push({ label: spec.label, seeded: inserted, skipped: false })
    }

    sqlite.close()
    rmSync(tmpDb, { force: true })

    console.log("── Postgres content seed ──────────────────────")
    for (const r of report) {
      console.log(`${r.label.padEnd(16)} ${r.skipped ? `(kept ${r.seeded} existing)` : r.seeded}`)
    }

    /* ---- 4. verify the site will actually be alive ---- */
    const [c2, l2, b2] = await Promise.all([db.course.count(), db.lesson.count(), db.bankQuestion.count()])
    const failed = TABLES.filter((t) => t.min !== undefined)
    const deficient = failed.filter((t) => {
      const r = report.find((x) => x.label === t.label)
      return !r || r.seeded < (t.min ?? 0)
    })
    if (deficient.length > 0) {
      console.error(
        `[db-seed-postgres] seed verified thin (courses=${c2} lessons=${l2} bank=${b2}; deficient: ${deficient.map((d) => d.label).join(", ")}) — the snapshot may be stale`
      )
      process.exit(1)
    }
    console.log(`[db-seed-postgres] OK — courses=${c2} lessons=${l2} bank=${b2}; user data on this database now survives redeploys`)
  } finally {
    await db.$disconnect()
  }
}

/** the little slice of bun:sqlite's surface we use (kept structural so the
 *  script also type-checks under a plain tsc pass without bun types) */
interface SQLiteLike {
  query(sql: string): { all(): unknown[] }
  close(): void
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
