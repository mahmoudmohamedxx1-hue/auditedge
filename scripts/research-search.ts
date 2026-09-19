/**
 * Research helper: run a web search via z-ai-web-dev-sdk and print JSON.
 * Usage: bun scripts/research-search.ts "query" [outfile]
 */
import ZAI from "z-ai-web-dev-sdk"

async function main() {
  const query = process.argv[2]
  const outfile = process.argv[3]
  if (!query) {
    console.error("usage: bun scripts/research-search.ts <query> [outfile]")
    process.exit(1)
  }
  const zai = await ZAI.create()
  const results = (await zai.functions.invoke("web_search", {
    query,
    num: 8,
  })) as unknown as Array<{
    url: string
    name: string
    snippet: string
    host_name: string
    rank: number
    date: string
  }>
  const json = JSON.stringify(results ?? [], null, 2)
  if (outfile) {
    await Bun.write(outfile, json)
    console.log(`wrote ${outfile}`)
  }
  console.log(json)
}

main().catch((e) => {
  console.error("search failed:", e)
  process.exit(1)
})
