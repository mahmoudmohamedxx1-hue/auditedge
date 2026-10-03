/** Quick round-trip check of the v32 deeplink parser (run with bun). */
import { parseHash, hashForRoute } from "../src/lib/deeplink"
import type { ViewName } from "../src/lib/audit-types"

let fail = 0
const check = (name: string, cond: boolean) => {
  if (!cond) {
    console.error("FAIL:", name)
    fail++
  } else console.log("ok:", name)
}

// parse: all fixed views
const cases: Array<[string, ViewName, string | null, string | null]> = [
  ["#/", "home", null, null],
  ["#/ai", "ai", null, null],
  ["#/courses", "courses", null, null],
  ["#/course/clx123", "course", "clx123", null],
  ["#/lesson/l42?c=clx123", "lesson", "clx123", "l42"],
  ["#/quiz/q9?c=clx123", "quiz", "clx123", "q9"],
  ["#/library", "library", null, null],
  ["#/program", "program", null, null],
  ["#/sectors?sector=banks", "sectors", null, null],
  ["#/analytics", "team", null, null],
  ["#/achievements", "achievements", null, null],
  ["#/certificate", "certificate", null, null],
  ["#/studio", "studio", null, null],
  ["#/studio/course/clx9", "studio-course", "clx9", null],
  ["#/discover", "discover", null, null],
  ["#/exam?paper=cpa-far", "exam", null, null],
  ["#/review", "review", null, null],
  ["#/simulation", "simulation", null, null],
  ["#/podcast", "podcast", null, null],
  ["#/ifrs?std=IFRS%2015", "ifrs", null, null],
]
for (const [hash, view, cid, lid] of cases) {
  const r = parseHash(hash)
  check(`parse ${hash}`, !!r && r.view === view && r.courseId === cid && r.lessonId === lid)
}

// params extraction
check("param std", parseHash("#/ifrs?std=IFRS%2015")?.params.get("std") === "IFRS 15")
check("param paper", parseHash("#/exam?paper=cpa-far")?.params.get("paper") === "cpa-far")
check("param sector", parseHash("#/sectors?sector=banks")?.params.get("sector") === "banks")
check("param video", parseHash("#/courses?video=yt-1")?.params.get("video") === "yt-1")
check("param c on lesson", parseHash("#/quiz/q1?c=c2")?.params.get("c") === "c2")

// encode: hashForRoute
check("encode home", hashForRoute("home", null, null) === "#/")
check("encode course", hashForRoute("course", "clx1", null) === "#/course/clx1")
check("encode lesson", hashForRoute("lesson", "c1", "l1") === "#/lesson/l1?c=c1")
check("encode quiz", hashForRoute("quiz", "c1", "q1") === "#/quiz/q1?c=c1")
check("encode studio-course", hashForRoute("studio-course", "c1", null) === "#/studio/course/c1")
check("encode exam", hashForRoute("exam", null, null) === "#/exam")
check("encode ifrs", hashForRoute("ifrs", null, null) === "#/ifrs")

// unknown route → null (shell keeps current view)
check("unknown route null", parseHash("#/nonsense/x") === null)
// empty segment → null
check("course without id null", parseHash("#/course/") === null)

// round-trip: encode → parse → same ids
const rt = parseHash(hashForRoute("lesson", "courseA", "lessonB"))
check("round-trip lesson", !!rt && rt.view === "lesson" && rt.courseId === "courseA" && rt.lessonId === "lessonB")

// ids with url-hostile characters still survive encodeURIComponent
const rt2 = parseHash(hashForRoute("course", "id with space/é", null))
check("round-trip hostile id", !!rt2 && rt2.courseId === "id with space/é")

// no hash → home
check("empty hash home", parseHash("")?.view === "home")

console.log(fail === 0 ? "\nALL PASS" : `\n${fail} FAILURES`)
process.exit(fail === 0 ? 0 : 1)
