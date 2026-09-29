/** Replace the zero-duration certifr entry with the regenerated good one. */
import { readFileSync, writeFileSync } from "fs"
const FILE = "src/lib/video-courses.ts"
const OUT = "scripts/v26/gen-courses.out"

const generated = readFileSync(OUT, "utf8")
// extract the certifr course block (from "{\n    id:" after its banner to the entry close)
const at = generated.indexOf('id: "certifr-planet-full"')
const blockStart = generated.lastIndexOf("  {", at)
const blockEnd = generated.indexOf("\n  },\n", at) + "\n  },\n".length
const block = generated.slice(blockStart, blockEnd).trimEnd()

let src = readFileSync(FILE, "utf8")
const re = /  \{\n    id: "certifr-planet-full",[\s\S]*?\n  \},/
if (!re.test(src)) throw new Error("certifr entry not found in video-courses.ts")
if (!block.includes('~27.1h')) throw new Error("regenerated block is missing durations")
src = src.replace(re, block)
writeFileSync(FILE, src)
console.log("certifr-planet-full entry replaced with duration-complete version")
