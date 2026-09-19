/** Test PDF text extraction with unpdf on the downloaded standards PDFs. */
import { extractText, getDocumentProxy } from "unpdf"

async function inspect(path: string, label: string) {
  const buf = await Bun.file(path).arrayBuffer()
  const pdf = await getDocumentProxy(new Uint8Array(buf))
  console.log(`\n=== ${label} ===`)
  console.log("pages:", pdf.numPages)
  const { totalPages, text } = await extractText(pdf, { mergePages: true })
  console.log("totalPages reported:", totalPages)
  console.log("text length:", text.length)
  const clean = text.replace(/\s+/g, " ")
  console.log("first 500 chars:", clean.slice(0, 500))
  // how often do ISA headings appear
  const isaMatches = clean.match(/International Standard on Auditing \(ISA\)|ISA \d{3}/g) ?? []
  console.log("ISA mentions:", isaMatches.length)
  // find standard section start patterns
  const starts = clean.match(/International Standard on Auditing \(ISA\) ?\d{3}/g) ?? []
  console.log("ISA section start candidates:", starts.length, [...new Set(starts)].slice(0, 5))
  const isqm = clean.match(/International Standard on Quality Management \(ISQM\) ?\d+/g) ?? []
  console.log("ISQM candidates:", isqm.length, [...new Set(isqm)].slice(0, 5))
}

await inspect("research/downloads/iaasb-2025-handbook-vol1.pdf", "IAASB 2025 Handbook Vol 1")
await inspect("research/downloads/fra-egyptian-accounting-standards-2019.pdf", "FRA Egyptian Accounting Standards 2019")
