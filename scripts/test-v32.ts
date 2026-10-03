/** v32 test battery — (1) shareable deep links for every page of the app,
 *  (2) the IFRS Summaries at the FULL depth of the user's 12-page IFRS 15
 *  notes PDF: every standard ≥ 45 revision blocks (flagship = 64).
 *
 *  Deep links: hash routing #/course/<id>, #/lesson/<id>?c=, #/ifrs?std=,
 *  #/exam?paper=, #/sectors?sector=, #/courses?video= … + Share buttons
 *  (mobile top bar, sidebar footer, course/lesson/IFRS/exam views, palette).
 *
 *  Run: bun scripts/test-v32.ts */
import { readFileSync } from "node:fs"
import { join } from "node:path"

let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  const mark = ok ? "✓" : "✗"
  console.log(`  ${mark} ${name}${detail ? ` — ${detail}` : ""}`)
  if (ok) pass++
  else fail++
}

const ROOT = process.cwd()

async function main() {
  console.log("v32 — shareable deep links + IFRS Summaries at the full PDF depth\n")

  /* ---------------- 1. the deeplink engine ---------------- */
  console.log("── 1. The deeplink engine (src/lib/deeplink.ts) ──")
  const { parseHash, hashForRoute, hashForRoutePreserving } = await import("../src/lib/deeplink")

  const fixedViews: Array<[string, string]> = [
    ["#/", "home"],
    ["#/ai", "ai"],
    ["#/courses", "courses"],
    ["#/library", "library"],
    ["#/program", "program"],
    ["#/sectors", "sectors"],
    ["#/analytics", "team"],
    ["#/achievements", "achievements"],
    ["#/certificate", "certificate"],
    ["#/studio", "studio"],
    ["#/discover", "discover"],
    ["#/exam", "exam"],
    ["#/review", "review"],
    ["#/simulation", "simulation"],
    ["#/podcast", "podcast"],
    ["#/ifrs", "ifrs"],
  ]
  for (const [hash, view] of fixedViews) check(`parse ${hash} → ${view}`, parseHash(hash)?.view === view)

  check("parse #/course/<id> keeps the id", parseHash("#/course/clx123")?.courseId === "clx123")
  const lesson = parseHash("#/lesson/l42?c=clx123")
  check("parse #/lesson/<id>?c= keeps lesson + course", lesson?.view === "lesson" && lesson?.lessonId === "l42" && lesson?.courseId === "clx123")
  check("parse #/quiz/<id>?c= routes the quiz view", parseHash("#/quiz/q9?c=c2")?.view === "quiz")
  check("parse #/studio/course/<id> routes studio-course", parseHash("#/studio/course/c9")?.view === "studio-course")
  check("component params ride the query (std/paper/sector/video)", 
    parseHash("#/ifrs?std=IFRS%2015")?.params.get("std") === "IFRS 15" &&
    parseHash("#/exam?paper=cpa-far")?.params.get("paper") === "cpa-far" &&
    parseHash("#/sectors?sector=banks")?.params.get("sector") === "banks" &&
    parseHash("#/courses?video=yt-1")?.params.get("video") === "yt-1")
  check("unknown route → null (shell keeps its view)", parseHash("#/nonsense/x") === null)
  check("hashForRoutePreserving exported for the shell rewrite", typeof hashForRoutePreserving === "function")
  check("encode→parse round-trip survives hostile ids",
    parseHash(hashForRoute("course", "id with space/é", null))?.courseId === "id with space/é")

  /* ---------------- 2. the shell wiring ---------------- */
  console.log("── 2. Shell + component wiring ──")
  const page = readFileSync(join(ROOT, "src/app/page.tsx"), "utf8")
  check("page.tsx applies the initial route from the hash", page.includes("parseHash(window.location.hash)"))
  check("page.tsx records navigations and preserves shared params (push on view change / replace on id change)", page.includes("history.pushState") && page.includes("history.replaceState") && page.includes("hashForRoutePreserving"))
  check("page.tsx listens to popstate + hashchange (back/forward)", page.includes('"popstate"') && page.includes('"hashchange"'))
  check("mobile top bar carries the share button", page.includes("ShareIconButton"))

  const sidebar = readFileSync(join(ROOT, "src/components/audit/sidebar.tsx"), "utf8")
  check("sidebar footer carries the share button (desktop)", sidebar.includes("ShareIconButton"))

  const palette = readFileSync(join(ROOT, "src/components/audit/command-palette.tsx"), "utf8")
  check("command palette has a copy-link action", palette.includes("share32.copyPage"))

  const share = readFileSync(join(ROOT, "src/components/audit/share-button.tsx"), "utf8")
  check("ShareButton: native share sheet + clipboard fallback", share.includes("navigator.share") && share.includes("clipboard.writeText"))

  const ifrsView = readFileSync(join(ROOT, "src/components/audit/ifrs-summaries.tsx"), "utf8")
  check("IFRS sheet syncs the ?std= param (open + back/forward)", ifrsView.includes('getRouteParam("std")') && ifrsView.includes('setRouteParam("std"'))
  check("IFRS sheet header has a Share button", ifrsView.includes("<ShareButton"))

  const examView = readFileSync(join(ROOT, "src/components/audit/exam-center.tsx"), "utf8")
  check("Exam paper picker syncs the ?paper= param (shareable per exam)", examView.includes('getRouteParam("paper")') && examView.includes('setRouteParam("paper"'))
  check("Exam family cards share #/exam?paper=… links", examView.includes('shareUrlFor("exam"'))

  const coursesView = readFileSync(join(ROOT, "src/components/audit/courses.tsx"), "utf8")
  check("Video-course player syncs the ?video= param", coursesView.includes('getRouteParam("video")') && coursesView.includes('setRouteParam("video"'))

  const sectorsView = readFileSync(join(ROOT, "src/components/audit/sectors.tsx"), "utf8")
  check("Sector library syncs the ?sector= param", sectorsView.includes('getRouteParam("sector")') && sectorsView.includes('setRouteParam("sector"'))

  const courseDetail = readFileSync(join(ROOT, "src/components/audit/course-detail.tsx"), "utf8")
  check("Course detail has a Share button + a not-found state for dead links", courseDetail.includes("<ShareButton") && courseDetail.includes("notFoundTitle"))
  const lessonPlayer = readFileSync(join(ROOT, "src/components/audit/lesson-player.tsx"), "utf8")
  check("Lesson player has a Share button + a not-found state", lessonPlayer.includes("<ShareButton") && lessonPlayer.includes("notFoundTitle"))

  const i18n = readFileSync(join(ROOT, "src/lib/i18n.ts"), "utf8")
  check("share i18n keys (EN + AR)", i18n.includes("share32:") && i18n.includes('copied: { en: "Link copied'))

  /* ---------------- 3. the IFRS depth bar (the user's ask) ---------------- */
  console.log("── 3. IFRS Summaries — the FULL 12-page-PDF depth bar ──")
  const { IFRS_SUMMARIES, depthOf, catalogStats } = await import("../src/lib/ifrs")

  const total = IFRS_SUMMARIES.reduce((a, s) => a + s.blocks.length, 0)
  check("catalog total ≥ 1,900 revision blocks (was 821 after v31)", total >= 1900, `${total} blocks`)
  check("average depth ≥ 46 blocks per standard (flagship = 64)", total / IFRS_SUMMARIES.length >= 46, (total / IFRS_SUMMARIES.length).toFixed(1))

  const shallowest = IFRS_SUMMARIES.reduce((m, s) => Math.min(m, s.blocks.length), Infinity)
  check("NO standard below 45 blocks", shallowest >= 45, `shallowest = ${shallowest}`)

  const headingsOk = IFRS_SUMMARIES.filter((s) => depthOf(s).headings >= 10).length
  check("every standard carries ≥ 10 section headings", headingsOk === 41, `${headingsOk}/41`)
  const parasOk = IFRS_SUMMARIES.filter((s) => s.blocks.filter((b) => b.kind === "p").length >= 10).length
  check("every standard carries ≥ 10 dense paragraphs", parasOk === 41, `${parasOk}/41`)
  const treesOk = IFRS_SUMMARIES.filter((s) => depthOf(s).trees >= 3).length
  check("every standard carries ≥ 3 decision trees", treesOk === 41, `${treesOk}/41`)
  const journalsOk = IFRS_SUMMARIES.filter((s) => depthOf(s).journals >= 2).length
  check("every standard carries ≥ 2 T-account sets", journalsOk === 41, `${journalsOk}/41`)
  const examplesOk = IFRS_SUMMARIES.filter((s) => depthOf(s).examples >= 1).length
  check("worked examples in every standard", examplesOk === 41, `${examplesOk}/41`)
  const tipsOk = IFRS_SUMMARIES.filter((s) => depthOf(s).tips >= 3).length
  check("every standard carries ≥ 3 exam tips", tipsOk === 41, `${tipsOk}/41`)

  const st = catalogStats()
  check("catalog-wide devices: trees ≥ 120", st.trees >= 120, `${st.trees}`)
  check("catalog-wide devices: journal sets ≥ 120", st.journals >= 120, `${st.journals}`)
  check("catalog-wide devices: worked examples ≥ 90", st.examples >= 90, `${st.examples}`)

  // bilingual integrity of every single string
  const arRe = /[\u0600-\u06FF]/
  let badBi = 0
  const walk = (v: unknown) => {
    if (!v || typeof v !== "object") return
    const o = v as Record<string, unknown>
    if ("en" in o && "ar" in o && typeof o.en === "string" && typeof o.ar === "string") {
      if (!o.en.trim() || !o.ar.trim() || !arRe.test(o.ar)) badBi++
    } else for (const k of Object.keys(o)) walk(o[k])
  }
  IFRS_SUMMARIES.forEach((s) => s.blocks.forEach((b) => walk(b)))
  check("every string bilingual with real Arabic script", badBi === 0, `${badBi} bad`)

  // structural validity of trees + journals
  let badTree = 0
  let badJournal = 0
  for (const s of IFRS_SUMMARIES) {
    for (const b of s.blocks) {
      if (b.kind === "tree") {
        const walkT = (br: { when?: unknown; then?: unknown; children?: unknown[] }) => {
          if (!br.when || !br.then) badTree++
          for (const c of (br.children ?? []) as typeof br[]) walkT(c as never)
        }
        for (const br of b.branches) walkT(br as never)
      }
      if (b.kind === "journal") for (const row of b.rows) if (!row.dr && !row.cr) badJournal++
    }
  }
  check("every tree branch has when → then", badTree === 0, `${badTree} bad`)
  check("every journal row has a dr or cr side", badJournal === 0, `${badJournal} bad`)

  // the per-standard checker script exists for spot checks
  const checker = readFileSync(join(ROOT, "scripts/check-ifrs-file.ts"), "utf8")
  check("the per-standard depth checker ships with the repo", checker.includes("MEETS the v32 depth bar"))

  /* ---------------- 4. version ---------------- */
  console.log("── 4. Version ──")
  const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"))
  const major = Number(pkg.version.split(".")[0])
  check("package.json at v32 or later", major >= 32, pkg.version)

  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

void main()
