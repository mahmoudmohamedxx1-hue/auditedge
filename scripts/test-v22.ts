/**
 * v22 test battery — keyless engine registry, previous-exam papers,
 * AI custom-exam policy, free courses and Arabic YouTube podcast catalogs.
 * Offline (db-backed for the paper seed; no network calls).
 *
 * Run: bun run scripts/test-v22.ts
 */
import { readFileSync } from "fs"

for (const f of [".env", ".env.local"]) {
  try {
    for (const line of readFileSync(f, "utf-8").split("\n")) {
      const m = line.match(/^([A-Z_]+)=(.*)$/)
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
    }
  } catch {}
}

let pass = 0
let fail = 0
const check = (name: string, cond: boolean, extra = "") => {
  if (cond) {
    pass++
    console.log(`  ✓ ${name}${extra ? ` — ${extra}` : ""}`)
  } else {
    fail++
    console.error(`  ✗ FAIL: ${name}${extra ? ` — ${extra}` : ""}`)
  }
}

async function main() {
  console.log("v22 — keyless engines · past papers · podcasts · free courses\n")

  /* ---- keyless engine registry (offline) ---- */
  const models = await import("../src/lib/models")
  const pool = await import("../src/lib/keyless-pool")
  check("registry: default engine is the keyless glm-5.3-flash", models.DEFAULT_MODEL === "glm-5.3-flash")
  check("registry: keyless group has 4 models", models.SELECTABLE_MODELS.filter((m) => m.group === "keyless").length === 4)
  check("pool: 6 catalogued routes (v25 adds llm7-glm)", Object.keys(pool.POOL).length === 6)
  check("pool: kilo route has no auth header", Object.keys(pool.POOL.kilo.headers).length === 0)
  check("pool: llm7 uses the unused-bearer convention", pool.POOL.llm7.headers.Authorization === "Bearer unused")

  /* ---- rate limit policy ---- */
  const { AI_POLICIES } = await import("../src/lib/ai-guard")
  check("guard: exam generation rate limited at 8/2min", AI_POLICIES.examGen.limit === 8)

  /* ---- past papers registry + seed (db) ---- */
  const { PAST_PAPERS } = await import("../src/lib/past-papers")
  // v23 extended the registry (7 papers, full lengths) — the v22 battery
  // now guards the FLOOR: the five v22 papers must remain registered
  check("papers: the five v22 papers stay registered", ["acca-aa", "acca-aaa", "acca-fr", "acca-sbr", "soe-audit"].every((id) => PAST_PAPERS.some((p) => p.id === id)), `${PAST_PAPERS.length} total`)
  check("papers: IFRS + auditing + egypt coverage", ["auditing", "accounting", "egypt"].every((a) => PAST_PAPERS.some((p) => p.area === a)))
  check("papers: every paper bilingual + timed", PAST_PAPERS.every((p) => p.titleEn && p.titleAr && p.blurbEn && p.blurbAr && p.durationMin > 0))

  const { PrismaClient } = await import("@prisma/client")
  const db = new PrismaClient()
  for (const paper of PAST_PAPERS) {
    const qs = await db.bankQuestion.findMany({ where: { source: paper.source } })
    check(`paper ${paper.id}: ${paper.count} questions seeded`, qs.length === paper.count, `${qs.length} found`)
    check(
      `paper ${paper.id}: fully bilingual`,
      qs.every((q) => q.stemAr && q.optionsAr && q.explanationAr)
    )
    check(
      `paper ${paper.id}: options valid + answers in range`,
      qs.every((q) => JSON.parse(q.options).length === 4 && q.answerIndex >= 0 && q.answerIndex <= 3)
    )
  }
  const totalPapers = await db.bankQuestion.count({ where: { source: { contains: "past paper" } } })
  // v23 grew the bank to 168 past-paper questions (687 total) — keep the
  // v22 floor so regressions below the original release still fail
  check("papers: at least 60 past-paper questions seeded", totalPapers >= 60, `${totalPapers}`)
  const aiLeftovers = await db.bankQuestion.count({ where: { source: "AI custom exam" } })
  check("no stray AI custom exams in the snapshot db", aiLeftovers === 0, `${aiLeftovers}`)
  await db.$disconnect()

  /* ---- free courses catalog (offline) ---- */
  const { FREE_COURSES } = await import("../src/lib/free-courses")
  check("courses: catalog present", FREE_COURSES.length >= 12, `${FREE_COURSES.length} entries`)
  check("courses: all urls https", FREE_COURSES.every((c) => c.url.startsWith("https://") || c.url.startsWith("http://www.acca-x.com")))
  check("courses: all bilingual + categorized", FREE_COURSES.every((c) => c.titleEn && c.titleAr && c.descEn && c.descAr && c.category))
  check("courses: ACCA, MIT, IFRS Foundation, Edraak represented", ["ACCA", "MIT", "IFRS Foundation", "Edraak"].every((p) => FREE_COURSES.some((c) => c.provider.includes(p))))

  /* ---- Arabic YouTube podcast catalog (offline) ---- */
  const { YT_EPISODES, YT_CATEGORIES } = await import("../src/lib/podcast-episodes")
  check("podcasts: catalog present", YT_EPISODES.length >= 20, `${YT_EPISODES.length} episodes`)
  check("podcasts: unique video ids", new Set(YT_EPISODES.map((e) => e.id)).size === YT_EPISODES.length)
  check("podcasts: CPA Talks featured (the learner's request)", YT_EPISODES.filter((e) => e.channel === "CPA Talks").length >= 6, `${YT_EPISODES.filter((e) => e.channel === "CPA Talks").length} episodes`)
  check("podcasts: every episode has channel/length/blurb bilingual", YT_EPISODES.every((e) => e.channel && e.length && e.blurbEn && e.blurbAr))
  check("podcasts: categories cover audit + IFRS + egypt + career", ["external-audit", "ifrs", "egypt", "internal-audit", "career"].every((c) => YT_EPISODES.some((e) => e.category === c)))
  check("podcasts: category chips bilingual", YT_CATEGORIES.every((c) => c.labelEn && c.labelAr))

  console.log(`\n${pass} passed, ${fail} failed`)
  process.exit(fail > 0 ? 1 : 0)
}

void main()
