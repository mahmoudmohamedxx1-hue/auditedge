/** Test NFKC normalization on garbled Arabic PDF text. */
import { extractText, getDocumentProxy } from "unpdf"

const buf = await Bun.file("research/downloads/fra-egyptian-accounting-standards-2019.pdf").arrayBuffer()
const pdf = await getDocumentProxy(new Uint8Array(buf))
const { text } = await extractText(pdf, { mergePages: true })
const clean = text.replace(/\s+/g, " ")

// NFKC normalization converts Arabic presentation forms to standard letters
const normalized = clean.normalize("NFKC")

console.log("=== RAW (first 300) ===")
console.log(clean.slice(0, 300))
console.log("\n=== NFKC (first 300) ===")
console.log(normalized.slice(0, 300))

// check for معيار mentions after normalization
const stdMentions = normalized.match(/معيار/g) ?? []
console.log("\n'معيار' occurrences after NFKC:", stdMentions.length)

// find the standard split pattern: معيار رقم (٤٥) etc.
const splits = normalized.match(/المعيار المصري لِ?ل?محاسبة|معيار رقم/g) ?? []
console.log("split candidates:", [...new Set(splits)].slice(0, 10), "count:", splits.length)

// sample a chunk from the middle where actual standards begin
const idx = normalized.indexOf("أولا")
console.log("\n=== NFKC middle sample ===")
console.log(normalized.slice(2000, 2600))
