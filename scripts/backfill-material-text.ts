/**
 * One-off: extract text for materials uploaded BEFORE the RAG feature existed.
 * Run: bunx tsx scripts/backfill-material-text.ts   (or bun run scripts/backfill-material-text.ts)
 */
import { promises as fs } from "fs"
import path from "path"

// minimal Prisma client (script runs outside Next.js)
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()
const UPLOAD_DIR = path.join(process.cwd(), "upload", "materials")

async function extractTextFromFile(bytes: Buffer, ext: string): Promise<string> {
  try {
    if (ext === ".pdf") {
      const { extractText, getDocumentProxy } = await import("unpdf")
      const pdf = await getDocumentProxy(new Uint8Array(bytes))
      const { text } = await extractText(pdf, { mergePages: true })
      const merged = Array.isArray(text) ? text.join("\n\n") : text
      return normalize(merged)
    }
    if (ext === ".txt" || ext === ".md" || ext === ".csv") {
      return normalize(bytes.toString("utf8"))
    }
    return ""
  } catch (e) {
    console.error("  extraction failed:", e instanceof Error ? e.message : e)
    return ""
  }
}

function normalize(raw: string): string {
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, 400_000)
}

async function main() {
  const materials = await db.material.findMany({
    where: { textContent: "" },
    select: { id: true, title: true, fileName: true },
  })
  console.log(`Materials without extracted text: ${materials.length}`)
  let indexed = 0
  for (const m of materials) {
    const ext = path.extname(m.fileName).toLowerCase()
    if (![".pdf", ".txt", ".md", ".csv"].includes(ext)) {
      console.log(`- skip (unsupported): ${m.title}`)
      continue
    }
    try {
      const bytes = await fs.readFile(path.join(UPLOAD_DIR, m.fileName))
      const text = await extractTextFromFile(bytes, ext)
      if (text) {
        await db.material.update({ where: { id: m.id }, data: { textContent: text } })
        console.log(`- indexed "${m.title}" (${text.length.toLocaleString()} chars)`)
        indexed++
      } else {
        console.log(`- no text found in "${m.title}"`)
      }
    } catch (e) {
      console.error(`- file read failed for "${m.title}":`, e instanceof Error ? e.message : e)
    }
  }
  console.log(`Done. Indexed ${indexed} of ${materials.length} materials.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
