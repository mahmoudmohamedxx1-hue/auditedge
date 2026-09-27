/** Debug the exam-generation rounds: engine, chars, parsed, valid, rejects */
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
  for (let round = 0; round < 3; round++) {
    const t0 = Date.now()
    const gen = await generateOnce({
      thinking: true,
      messages: [
        { role: "system", content: "You are a professional exam writer. You output only valid JSON arrays of exam questions." },
        { role: "user", content: 'Write 6 multiple-choice exam questions about: ISA 315 risk assessment. Difficulty: medium. Exactly 4 options, one answer, 2-sentence explanation, Arabic translations (stemAr/optionsAr/explanationAr). Return ONLY a JSON array: [{"stem":"...","stemAr":"...","options":["A","B","C","D"],"optionsAr":["x","x","x","x"],"answerIndex":0,"explanation":"...","explanationAr":"...","standardTag":"ISA 315"}]' },
      ],
    })
    const text = gen?.text ?? ""
    console.log(`\n=== round ${round}: engine=${gen?.engine} chars=${text.length} in ${Date.now() - t0}ms`)
    // quick validity count
    const objs = text.match(/"stem":/g)?.length ?? 0
    const okAr = (text.match(/"stemAr":/g) ?? []).length
    console.log(`   stems=${objs} stemAr=${okAr} truncated=${!text.trim().endsWith("]")}`)
  }
}
void main()
