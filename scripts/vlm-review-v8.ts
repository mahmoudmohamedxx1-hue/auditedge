/** Quick VLM visual review of the v8 audit screenshots. */
import ZAI from "z-ai-web-dev-sdk"
import { readFileSync } from "fs"

async function main() {
  const zai = await ZAI.create()
  const shots = [
    ["download/v8-final-dashboard.png", "Dashboard (home)"],
    ["download/v8-audit-esa-course.png", "Course detail — Egyptian auditing standards course (Arabic RTL)"],
    ["download/v8-audit-ai-esa-answer.png", "AI Tutor — Arabic answer with library citations"],
    ["download/v8-audit-library.png", "Library with 146 materials"],
  ] as const

  for (const [path, label] of shots) {
    const b64 = readFileSync(path).toString("base64")
    const res = await zai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: { url: `data:image/png;base64,${b64}` },
            },
            {
              type: "text",
              text: `This is a screenshot of the "${label}" screen of a professional audit-training web app (Claude-style warm cream UI). Briefly review ONLY for visual defects: overlapping/broken text, misaligned elements, cut-off content, broken RTL Arabic rendering, empty/broken components. Reply in <=60 words: either "PASS" plus one line, or "ISSUES:" plus a short list.`,
            },
          ],
        } as never,
      ],
      thinking: { type: "disabled" },
    })
    const text = (res as { choices?: { message?: { content?: string } }[] }).choices?.[0]?.message?.content ?? ""
    console.log(`\n=== ${label} ===\n${text.trim()}`)
  }
}

main().catch((e) => {
  console.error("VLM review failed:", e instanceof Error ? e.message : e)
  process.exit(1)
})
