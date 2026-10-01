/** v26 test battery — bilingual findable podcasts, the AI podcast studio,
 *  full multi-lecture courses, and past papers for every course track.
 *
 *  Run: bun scripts/test-v26.ts */
import { PrismaClient } from "@prisma/client"

let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  const mark = ok ? "✓" : "✗"
  console.log(`  ${mark} ${name}${detail ? ` — ${detail}` : ""}`)
  if (ok) pass++
  else fail++
}

async function main() {
  console.log("v26 — bilingual podcasts · AI podcast studio · full courses · track exams\n")

  console.log("── 1. Bilingual findable podcasts (offline) ──")
  const { YT_EPISODES } = await import("../src/lib/podcast-episodes")
  check("podcasts: every episode carries BOTH an English and Arabic title", YT_EPISODES.every((e) => e.titleEn.trim() && e.titleAr.trim()))
  const hit = (q: string) =>
    YT_EPISODES.filter((e) => `${e.titleEn} ${e.titleAr} ${e.channel} ${e.blurbEn} ${e.blurbAr}`.toLowerCase().includes(q.toLowerCase()))
  check("podcasts: 'qawain' (EN spelling) finds the Qawaim accounting podcast", hit("qawain").length >= 5, `${hit("qawain").length}`)
  check("podcasts: 'قوائم' (AR spelling) finds it too", hit("قوائم").length >= 5, `${hit("قوائم").length}`)
  check("podcasts: 'KPMG' finds the CEO interview", hit("kpmg").length >= 1)
  check("podcasts: ids stay unique", new Set(YT_EPISODES.map((e) => e.id)).size === YT_EPISODES.length)

  console.log("── 2. AI podcast studio (offline: routes, player, guard) ──")
  const { readFile } = await import("fs/promises")
  const genRoute = await readFile("src/app/api/ai/podcast/generate/route.ts", "utf8")
  check("studio: generate route exists and rate-limits itself", genRoute.includes("AI_POLICIES.podcast") && genRoute.includes("generateOnce"))
  check("studio: generate validates topic + length + style", ["MINUTES", "STYLES", "topic is required"].every((s) => genRoute.includes(s)))
  check("studio: JSON parser tolerates fences and rejects thin scripts", genRoute.includes("parseScript") && genRoute.includes("turns.length < 6"))
  check("studio: offline fallback script ships (never dead-ends)", genRoute.includes("fallbackScript"))
  const speakRoute = await readFile("src/app/api/ai/podcast/speak/route.ts", "utf8")
  check("studio: speak route voices host and guest with DIFFERENT voices", speakRoute.includes("VOICES") && speakRoute.includes("guest"))
  check("studio: speak caps turns and characters (serverless-safe)", speakRoute.includes("MAX_TURNS") && speakRoute.includes("MAX_TOTAL_CHARS"))
  check("studio: speak uses Edge neural voices (same engine as lessons)", speakRoute.includes("edgeSynthesize"))
  const player = await readFile("src/lib/player.ts", "utf8")
  check("player: custom podcasts carry their speak payload", player.includes("speak?:"))
  const audioPlayer = await readFile("src/components/audit/audio-player.tsx", "utf8")
  check("player: the sticky player synthesizes custom tracks via /speak", audioPlayer.includes('"/api/ai/podcast/speak"'))
  const guard = await readFile("src/lib/ai-guard.ts", "utf8")
  check("guard: podcast policies registered (write + speak)", guard.includes("podcast: {") && guard.includes("podcastSpeak: {"))
  const i18n = await readFile("src/lib/i18n.ts", "utf8")
  check(
    "i18n: studio strings complete",
    ["studioTitle", "studioTopicPh", "studioGenerate", "studioPlay", "studioFallback", "searchPh", "searchNone"].every((k) => i18n.includes(`"${k}"`) || i18n.includes(`${k}: `))
  )
  const podcastPage = await readFile("src/components/audit/podcast.tsx", "utf8")
  check("podcast page: bilingual search box filters EN + AR fields", podcastPage.includes("ytQuery") && podcastPage.includes("titleEn"))
  check("podcast page: cards show the OTHER language as a second line", podcastPage.includes("altTitle"))

  console.log("── 3. Full courses (offline) ──")
  const { VIDEO_COURSES } = await import("../src/lib/video-courses")
  const full = ["cma-p1-amro", "cma-p2-amro", "cma-p1-efham", "cpa-aud-amro", "cpa-far-amro", "dipifr-abdelnaim", "certifr-planet-full", "acca-f3-sowmya"]
  const lessonsOf = (id: string) => VIDEO_COURSES.find((c) => c.id === id)?.lessons.length ?? 0
  check("courses: 43 courses (36 + 8 v27 office/Arabic additions − the superseded ams-4h)", VIDEO_COURSES.length === 43, `${VIDEO_COURSES.length}`)
  check("courses: CMA Part 1 complete (30 lectures)", lessonsOf("cma-p1-amro") === 30, `${lessonsOf("cma-p1-amro")}`)
  check("courses: CMA Part 2 complete (19 lectures)", lessonsOf("cma-p2-amro") === 19, `${lessonsOf("cma-p2-amro")}`)
  check("courses: CPA AUD complete (21 lectures)", lessonsOf("cpa-aud-amro") === 21, `${lessonsOf("cpa-aud-amro")}`)
  check("courses: CPA FAR complete (27 lectures)", lessonsOf("cpa-far-amro") === 27, `${lessonsOf("cpa-far-amro")}`)
  check("courses: DipIFR diploma complete (51 lectures, 100h+)", lessonsOf("dipifr-abdelnaim") === 51, `${lessonsOf("dipifr-abdelnaim")}`)
  check("courses: CertIFR complete (51 sessions)", lessonsOf("certifr-planet-full") === 51, `${lessonsOf("certifr-planet-full")}`)
  check("courses: every new pro course is multi-lecture (≥19)", full.every((id) => lessonsOf(id) >= 19))
  check("courses: no lesson carries a fabricated 0:00 length", VIDEO_COURSES.every((c) => c.lessons.every((l) => l.length !== "0:00")))
  const ids = VIDEO_COURSES.flatMap((c) => c.lessons.map((l) => l.id))
  check("courses: every lesson id is a valid 11-char YouTube id", ids.every((id) => /^[A-Za-z0-9_-]{11}$/.test(id)))

  console.log("── 4. Past papers for every course track (offline) ──")
  const { PAPER_FAMILIES, PAPER_GROUPS, PAST_PAPERS, getPastPaper } = await import("../src/lib/past-papers")
  check("papers: 23 families (17 + the 6 new track families)", PAPER_FAMILIES.length === 23, `${PAPER_FAMILIES.length}`)
  for (const g of ["cpa", "cfa", "cma"] as const) {
    check(`papers: the ${g.toUpperCase()} group exists with a bilingual label`, PAPER_GROUPS.some((x) => x.id === g && x.labelEn && x.labelAr))
  }
  const cpa = PAPER_FAMILIES.filter((f) => f.group === "cpa").map((f) => f.id)
  check("papers: CPA carries AUD + FAR + REG", ["cpa-aud", "cpa-far", "cpa-reg"].every((id) => cpa.includes(id)), cpa.join(","))
  check("papers: CFA Level I family present", PAPER_FAMILIES.some((f) => f.id === "cfa-l1" && f.group === "cfa"))
  check("papers: CMA Parts 1 & 2 families present", ["cma-p1", "cma-p2"].every((id) => PAPER_FAMILIES.some((f) => f.id === id && f.group === "cma")))
  check("papers: every new family has five sittings (flagship + 4 years)", ["cpa-aud", "cpa-far", "cpa-reg", "cfa-l1", "cma-p1", "cma-p2"].every((id) => (getPastPaper(id)?.count ?? 0) === 24 && PAPER_FAMILIES.find((f) => f.id === id)!.sittings.length === 4))
  check("papers: every sitting id resolves (flagships + dated)", PAST_PAPERS.every((p) => getPastPaper(p.id)?.id === p.id))
  const dupSources = new Map<string, number>()
  for (const p of PAST_PAPERS) dupSources.set(p.source, (dupSources.get(p.source) ?? 0) + 1)
  check("papers: paper sources are unique (bank selection is exact)", new Set(dupSources.values()).size === 1 && dupSources.values().next().value === 1)
  const coursesPage = await readFile("src/components/audit/courses.tsx", "utf8")
  check("courses page: the track-exams strip deep-links to the Exam Center", coursesPage.includes('navigate("exam")') && coursesPage.includes("setExamSearch"))
  const store = await readFile("src/store/useAppStore.ts", "utf8")
  check("store: examSearch wired (state + setter)", store.includes("examSearch: string") && store.includes("setExamSearch"))

  console.log("── 5. Seed generator hygiene (offline) ──")
  const { composeV26 } = await import("../scripts/seed/v26/families-v26")
  const gen1 = composeV26()
  const gen2 = composeV26()
  check("generator: deterministic (compose twice → identical)", JSON.stringify(gen1) === JSON.stringify(gen2))
  check("generator: 576 questions (6 families × 96)", gen1.length === 576, `${gen1.length}`)
  check("generator: all codes unique", new Set(gen1.map((q) => q.code)).size === gen1.length)
  check("generator: every question is fully bilingual", gen1.every((q) => q.stem.trim() && q.stemAr.trim() && q.explanation.trim() && q.explanationAr.trim()))
  check("generator: stems globally unique across the v26 set", new Set(gen1.map((q) => q.stem)).size === gen1.length)
  check("generator: 4 options everywhere", gen1.every((q) => q.options.length === 4 && q.optionsAr.length === 4))
  const dist = [0, 0, 0, 0]
  for (const q of gen1) dist[q.answerIndex]++
  check("generator: answer positions spread across A–D", dist.every((d) => d > 100), `A=${dist[0]} B=${dist[1]} C=${dist[2]} D=${dist[3]}`)

  console.log("── 6. Bank + papers wired together (database) ──")
  const db = new PrismaClient()
  try {
    const bank = await db.bankQuestion.count()
    check("bank: total grew to ~2,685 (2,109 + 576)", bank === 2685, `${bank}`)
    for (const [family, source] of [
      ["cpa-aud", "CPA AUD past paper"],
      ["cpa-far", "CPA FAR past paper"],
      ["cpa-reg", "CPA REG past paper"],
      ["cfa-l1", "CFA Level I past paper"],
      ["cma-p1", "CMA Part 1 past paper"],
      ["cma-p2", "CMA Part 2 past paper"],
    ] as const) {
      const paper = getPastPaper(family)!
      const flagshipCount = await db.bankQuestion.count({ where: { source: paper.source } })
      check(`bank: ${family} flagship has its ${paper.count} questions`, flagshipCount === paper.count, `${flagshipCount}`)
      const sittingSources = PAPER_FAMILIES.find((f) => f.id === family)!.sittings.map((s) => s.source)
      const sittingCounts = await Promise.all(sittingSources.map((src) => db.bankQuestion.count({ where: { source: src } })))
      check(`bank: ${family} dated sittings all present (18 each)`, sittingCounts.every((n) => n === 18), sittingCounts.join(","))
      check(`bank: ${family} source labels match the paper registry`, sittingSources.every((src) => src.startsWith(source)))
    }
  } finally {
    await db.$disconnect()
  }

  console.log("───────────────────────────────────────────────")
  console.log(`v26 battery: ${pass} pass · ${fail} fail`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
