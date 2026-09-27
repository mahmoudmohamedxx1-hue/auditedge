/** Probe: what does the keyless engine return for an exam-generation prompt? */
import { readFileSync } from "fs"
for (const f of [".env", ".env.local"]) {
  try {
    for (const line of readFileSync(f, "utf-8").split("\n")) {
      const m = line.match(/^([A-Z_]+)=(.*)$/)
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
    }
  } catch {}
}

async function main() {
  const { generateOnce } = await import("../src/lib/ai")
  const res = await generateOnce({
    thinking: true,
    messages: [
      {
        role: "system",
        content:
          "You are a professional exam writer. You output only valid JSON arrays of exam questions.",
      },
      {
        role: "user",
        content:
          'Write 5 multiple-choice exam questions about: audit risk model and ISA 315 risk assessment. Section: auditing. Difficulty: medium — scenario application.\n\nRULES: exactly 4 options, one correct answer, 2-3 sentence explanation citing the standard, plausible distractors. Provide Arabic translations (stemAr, optionsAr, explanationAr).\n\nOUTPUT — return ONLY a JSON array, no markdown fences, no commentary:\n[{"stem":"...","stemAr":"...","options":["A","B","C","D"],"optionsAr":["...","...","...","..."],"answerIndex":0,"explanation":"...","explanationAr":"...","standardTag":"ISA 315"}]',
      },
    ],
  })
  console.log("engine:", res?.engine)
  console.log("text length:", res?.text?.length)
  console.log("----- RAW FIRST 1200 -----")
  console.log(res?.text?.slice(0, 1200))
  console.log("----- RAW LAST 400 -----")
  console.log(res?.text?.slice(-400))
}

void main()
