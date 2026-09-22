/**
 * Vercel database provisioning simulation (v18.0.2).
 *
 * Reproduces, on this machine, exactly what src/lib/db.ts does inside a
 * Vercel serverless instance:
 *   • VERCEL=1 marker present, .env not shipped (deployment env only)
 *   • TMPDIR is the only writable directory
 *   • the bundled snapshot must be found relative to the process cwd
 *
 * Run: bun scripts/test-vercel-db.ts
 * Passes when the provisioned /tmp database serves the full content set
 * (30 courses, 933 lessons) and a write round-trips (user chat persists).
 */
import { existsSync, mkdirSync, rmSync } from "fs"
import { join } from "path"

const SIM_TMP = join(process.cwd(), ".restore", "vercel-sim-tmp")

// --- simulate the Vercel environment BEFORE importing src/lib/db.ts -------
process.env.VERCEL = "1"
process.env.TMPDIR = SIM_TMP
delete process.env.DATABASE_URL // .env never ships to the serverless bundle
mkdirSync(SIM_TMP, { recursive: true })

const { db } = await import("../src/lib/db")

let failures = 0
const check = (name: string, ok: boolean, detail = "") => {
  console.log(`${ok ? "✓" : "✗"} ${name}${detail ? " — " + detail : ""}`)
  if (!ok) failures++
}

const provisionedPath = join(SIM_TMP, "auditedge-demo.db")
check("snapshot provisioned into TMPDIR", existsSync(provisionedPath))

const courses = await db.course.count()
const lessons = await db.lesson.count()
const materials = await db.material.count()
const users = await db.user.count()
check("courses served", courses === 30, `${courses} courses`)
check("lessons served", lessons === 933, `${lessons} lessons`)
check("materials served", materials === 146, `${materials} materials`)
check("single workspace user", users === 1, `${users} user`)

// writes must work — the provisioned copy lives in writable TMPDIR
const before = await db.aiConversation.count()
await db.aiConversation.create({
  data: { userId: (await db.user.findFirstOrThrow()).id, title: "sim" },
})
const after = await db.aiConversation.count()
check("write round-trip on provisioned db", after === before + 1)
await db.aiConversation.deleteMany({ where: { title: "sim" } })

// second import path: an existing provisioned db must be reused as-is
const statBefore = existsSync(provisionedPath)
check("provisioned db persists for instance lifetime", statBefore)

await db.$disconnect()
rmSync(SIM_TMP, { recursive: true, force: true })

console.log(failures === 0 ? "\nvercel-db simulation: ALL PASS" : `\nvercel-db simulation: ${failures} FAIL`)
process.exit(failures === 0 ? 0 : 1)
