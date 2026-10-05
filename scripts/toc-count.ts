/** v37 — quick census of the Test of Control industry library. */
import { TOC_CORE_QUESTIONS } from "../src/lib/toc/core"
import {
  TOC_INDUSTRIES,
  TOC_MODULE_QUESTION_COUNT,
  tocLibraryQuestionCount,
} from "../src/lib/toc/library"

let dup: string[] = []
const seen = new Set<string>()
for (const ind of TOC_INDUSTRIES) {
  if (seen.has(ind.id)) dup.push(ind.id)
  seen.add(ind.id)
  const qids = new Set(ind.questions.map((q) => q.id))
  if (qids.size !== ind.questions.length) console.log("DUP question id in", ind.id)
}
console.log("industries:", TOC_INDUSTRIES.length)
console.log("sectors:", new Set(TOC_INDUSTRIES.map((i) => i.sector)).size)
console.log("core questions:", TOC_CORE_QUESTIONS.length)
console.log("module questions:", TOC_MODULE_QUESTION_COUNT)
console.log("total unique questions:", tocLibraryQuestionCount())
console.log("duplicate industry ids:", dup.length ? dup.join(",") : "none")
const counts = TOC_INDUSTRIES.map((i) => i.questions.length)
console.log("min/max module questions:", Math.min(...counts), "/", Math.max(...counts))
