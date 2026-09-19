import { extractText, getDocumentProxy } from "unpdf"

/**
 * Text extraction for uploaded materials — powers the AI tutor's
 * "library search" (RAG over the office's own PDFs and documents).
 * Free and fully local: no external API calls.
 */

const MAX_TEXT_CHARS = 400_000

export type ExtractResult = {
  text: string
  pages?: number
}
// unpdf extractText returns { totalPages, text } — kept local to avoid import type friction

/** Extract searchable text from a file buffer, based on its extension. */
export async function extractTextFromFile(
  bytes: Buffer,
  ext: string
): Promise<ExtractResult | null> {
  try {
    if (ext === ".pdf") {
      const pdf = await getDocumentProxy(new Uint8Array(bytes))
      const { text, totalPages } = await extractText(pdf, { mergePages: true })
      const merged = Array.isArray(text) ? text.join("\n\n") : text
      return { text: normalize(merged), pages: totalPages }
    }
    if (ext === ".txt" || ext === ".md" || ext === ".csv") {
      return { text: normalize(bytes.toString("utf8")) }
    }
    // office formats, images, videos — no local extraction for now
    return null
  } catch (e) {
    console.error(`text extraction failed for ${ext}:`, e instanceof Error ? e.message : e)
    return null
  }
}

function normalize(raw: string): string {
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, MAX_TEXT_CHARS)
}
