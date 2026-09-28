/**
 * Restore the local dev SQLite DB (db/custom.db) from the shipped content
 * snapshot (prisma/auditedge-demo.db.gz). Idempotent — safe to re-run.
 *
 * Run: bun scripts/restore-local-db.ts
 */
import { gunzipSync } from "node:zlib"
import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { PrismaClient } from "@prisma/client"

const root = process.cwd()
const snapshotPath = join(root, "prisma", "auditedge-demo.db.gz")
const dbPath = join(root, "db", "custom.db")

console.log(`[restore] gunzipping ${snapshotPath} -> ${dbPath}`)
const raw = gunzipSync(readFileSync(snapshotPath))
writeFileSync(dbPath, raw)
console.log(`[restore] wrote ${(raw.length / 1024 / 1024).toFixed(2)} MB`)

const db = new PrismaClient()
async function main() {
  const [bank, courses, lessons, quizzes, conversations] = await Promise.all([
    db.bankQuestion.count(),
    db.course.count(),
    db.lesson.count(),
    db.quiz.count(),
    db.aiConversation.count(),
  ])
  console.log(
    `[restore] bank=${bank} courses=${courses} lessons=${lessons} quizzes=${quizzes} aiConversations=${conversations}`
  )
  if (bank < 800 || courses < 40) {
    console.error("[restore] counts look too low — snapshot may be stale")
    process.exit(1)
  }
  console.log("[restore] OK — local DB matches the v24 snapshot")
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
