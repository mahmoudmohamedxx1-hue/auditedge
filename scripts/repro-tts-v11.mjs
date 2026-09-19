// Reproduce the client TTS pipeline against the live API with the real answer.
// Mirrors src/lib/audio.ts stripMarkdown + splitForTts exactly.
import { readFileSync } from "node:fs"

const raw = readFileSync("/tmp/answer.txt", "utf8")

function stripMarkdown(md) {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^\|[-\s|:]+\|$/gm, " ")
    .replace(/\|/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/^[-*_]{3,}\s*$/gm, " ")
    .replace(/\n{2,}/g, "\n")
    .replace(/[ \t]+/g, " ")
    .trim()
}

function splitForTts(text, maxLen = 900) {
  const sentences = text.match(/[^.!?؟…\n]+[.!?؟…]+|\n+|[^.!?؟…\n]+$/g) ?? [text]
  const chunks = []
  let current = ""
  for (const s of sentences) {
    const piece = s.trim()
    if (!piece) continue
    if (piece.length > maxLen) {
      if (current) {
        chunks.push(current.trim())
        current = ""
      }
      let rest = piece
      while (rest.length > maxLen) {
        let cut = rest.lastIndexOf(" ", maxLen)
        if (cut <= 0) cut = maxLen
        chunks.push(rest.slice(0, cut).trim())
        rest = rest.slice(cut)
      }
      current = rest
    } else if ((current + " " + piece).length <= maxLen) {
      current = current ? current + " " + piece : piece
    } else {
      if (current) chunks.push(current.trim())
      current = piece
    }
  }
  if (current.trim()) chunks.push(current.trim())
  return chunks.filter(Boolean)
}

const clean = stripMarkdown(raw)
const chunks = splitForTts(clean)
console.log(`answer: ${raw.length} chars → stripped: ${clean.length} → ${chunks.length} chunks`)
console.log("chunk lengths:", chunks.map((c) => c.length).join(", "))

for (let i = 0; i < Math.min(chunks.length, 6); i++) {
  const res = await fetch("http://localhost:3000/api/ai/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: chunks[i] }),
  })
  const ct = res.headers.get("content-type") || ""
  if (ct.includes("audio")) {
    console.log(`chunk ${i + 1}: 200 audio, ${(await res.arrayBuffer()).byteLength} bytes`)
  } else {
    const body = await res.text()
    console.log(`chunk ${i + 1}: ${res.status} ERROR: ${body.slice(0, 300)}`)
    console.log(`  failing text (first 250): ${JSON.stringify(chunks[i].slice(0, 250))}`)
  }
}
