/** v35 test battery — the Sameh Zidan exams open INSIDE the website.
 *
 *  Every DipIFR paper is now mirrored into public/exams/dipifr/ and opens
 *  in the in-app exam viewer (same-origin iframe for PDFs, download card
 *  for spreadsheets) instead of navigating to the author's CDN. Only the
 *  five files too heavy to mirror (three xlsx workbooks + the BPP pair)
 *  remain clearly-labelled external downloads.
 *
 *  Also covers the sidebar release badge (v-number straight from
 *  package.json) so "is the site updated?" is answerable at a glance.
 *
 *  Run: bun scripts/test-v35.ts */
import { existsSync, statSync, readFileSync, readdirSync } from "node:fs"

let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  const mark = ok ? "✓" : "✗"
  console.log(`  ${mark} ${name}${detail ? ` — ${detail}` : ""}`)
  if (ok) pass++
  else fail++
}

async function main() {
  console.log("v35 — the exams open inside the website (self-hosted archive + viewer)\n")

  /* ---------------- 1. the mirrored papers ---------------- */
  console.log("── 1. Mirrored files on disk (public/exams/dipifr) ──")
  const { DIP_SITTINGS, DIP_RESOURCES, dipIsSheet } = await import("../src/lib/dipifr-archive")

  const referenced = new Set<string>()
  for (const s of DIP_SITTINGS) referenced.add(s.local)
  for (const r of DIP_RESOURCES) if (r.local) referenced.add(r.local)

  const dir = "public/exams/dipifr"
  const onDisk = readdirSync(dir).filter((f) => !f.startsWith("."))
  check("30 files mirrored (26 sittings + combined + Q4 + index + glossary)", onDisk.length === 30, String(onDisk.length))
  check("every referenced local path exists on disk", [...referenced].every((p) => existsSync(`public${p}`)))
  check("no orphan files on disk (every file is referenced)", onDisk.every((f) => referenced.has(`/exams/dipifr/${f}`)), `${onDisk.length} files / ${referenced.size} refs`)

  let total = 0
  let allPresent = true
  for (const p of referenced) {
    const f = `public${p}`
    if (!existsSync(f)) { allPresent = false; continue }
    const size = statSync(f).size
    total += size
    if (p.endsWith(".pdf") && size < 150_000) { check(`PDF suspiciously small: ${p}`, false, `${size} bytes`); allPresent = false }
    if (/\.xlsx$/.test(p) && size < 10_000) { check(`xlsx suspiciously small: ${p}`, false, `${size} bytes`); allPresent = false }
  }
  check("every mirrored file is non-empty and plausibly sized", allPresent)
  check("total mirrored weight is sane (20–45 MB)", total > 20_000_000 && total < 45_000_000, `${(total / 1048576).toFixed(1)} MB`)

  const sittingLocals = DIP_SITTINGS.map((s) => s.local)
  check("every sitting has a local /exams/dipifr/*.pdf path", sittingLocals.every((l) => /^\/exams\/dipifr\/\d{4}-(06|12|06-answers)\.pdf$/.test(l)))
  check("sitting local paths unique", new Set(sittingLocals).size === sittingLocals.length)
  check("every sitting keeps the CDN original as its external fallback", DIP_SITTINGS.every((s) => s.url.startsWith("https://sameh-files.b-cdn.net/")))
  const jun25 = DIP_SITTINGS.find((s) => s.year === 2025 && s.session === "june")
  check("June 2025 answered copy is mirrored + still flagged", Boolean(jun25?.local.includes("answers") && jun25?.answers))

  /* ---------------- 2. hosted vs external split ---------------- */
  console.log("\n── 2. Hosted-in-app vs external-download split ──")
  const hosted = DIP_RESOURCES.filter((r) => r.local)
  const external = DIP_RESOURCES.filter((r) => r.externalMb && !r.local)
  check("4 companion resources are self-hosted (combined, Q4 bank, index, glossary)", hosted.length === 4, hosted.map((r) => r.id).join(", "))
  check("5 companion resources stay external (3 workbooks + BPP pair)", external.length === 5, external.map((r) => r.id).join(", "))
  check("every external resource declares its size (MB)", external.every((r) => (r.externalMb ?? 0) >= 8))
  const bppText = external.find((r) => r.id === "bpp-text")
  check("the 103 MB BPP text is NOT mirrored (git 100 MB file limit)", Boolean(bppText && bppText.externalMb === 103 && !bppText.local))
  check("dipIsSheet detects spreadsheets by extension", dipIsSheet("/exams/dipifr/glossary-en-ar.xlsx") && !dipIsSheet("/exams/dipifr/2024-12.pdf"))

  /* ---------------- 3. the in-app viewer ---------------- */
  console.log("\n── 3. The in-app exam viewer (exam-viewer.tsx) ──")
  const viewerSrc = readFileSync("src/components/audit/exam-viewer.tsx", "utf-8")
  check("viewer renders PDFs in a same-origin iframe", viewerSrc.includes("<iframe") && viewerSrc.includes("src={doc.local}"))
  check("viewer offers a download of the self-hosted file", viewerSrc.includes('href={doc.local}') && viewerSrc.includes("download"))
  check("viewer keeps an open-externally fallback to the CDN original", viewerSrc.includes('href={doc.url}') && viewerSrc.includes('target="_blank"'))
  check("viewer switches to a download card for spreadsheets", viewerSrc.includes("dipIsSheet") && viewerSrc.includes("viewerSheetNote"))
  check("viewer is a Dialog (ESC + focus + a11y for free)", viewerSrc.includes("DialogContent"))
  check("viewer badges the answered copy", viewerSrc.includes("doc.answers") && viewerSrc.includes("dipWithAnswers"))

  /* ---------------- 4. the panel wiring ---------------- */
  console.log("\n── 4. Panel wiring (dip-archive.tsx) ──")
  const panelSrc = readFileSync("src/components/audit/dip-archive.tsx", "utf-8")
  check("sitting chips are BUTTONS that open the viewer (no navigation away)", panelSrc.includes("<button") && panelSrc.includes("onOpen({") && !panelSrc.includes("SessionChip\b.*href"))
  check("sitting chips no longer carry target=_blank", !/SessionChip[\s\S]{0,400}target="_blank"/.test(panelSrc))
  check("panel mounts the ExamViewer with doc state", panelSrc.includes("<ExamViewer") && panelSrc.includes("doc={doc}") && panelSrc.includes("onClose={() => setDoc(null)}"))
  check("hosted companion cards open the viewer in-app", panelSrc.includes('setDoc({') && panelSrc.includes("r.local!"))
  check("external companion cards are labelled downloads with sizes", panelSrc.includes("dipExternalDownload") && panelSrc.includes("r.externalMb"))
  check("source attribution link kept", panelSrc.includes("DIP_SOURCE.url"))

  /* ---------------- 5. i18n keys ---------------- */
  console.log("\n── 5. i18n keys (EN + AR) ──")
  const i18nSrc = readFileSync("src/lib/i18n.ts", "utf-8")
  const keys = [
    "dipArchiveShort", "dipHostedInApp", "dipExternalDownload", "dipExternalWhy",
    "viewerDownload", "viewerExternal", "viewerSheetTitle", "viewerSheetNote", "viewerDownloadFile",
  ]
  for (const k of keys) {
    const re = new RegExp(`${k}:\\s*\\{\\s*en:\\s*"[^"]+",?\\s*ar:\\s*"[^"]+"`, "s")
    check(`i18n key exam.${k} (EN + AR)`, re.test(i18nSrc))
  }
  check("i18n key shell.versionBadge (EN + AR)", /versionBadge:\s*\{\s*en:\s*"[^"]+",?\s*ar:\s*"[^"]+"/.test(i18nSrc))

  /* ---------------- 6. the release badge ---------------- */
  console.log("\n── 6. The sidebar release badge ──")
  const versionSrc = readFileSync("src/lib/app-version.ts", "utf-8")
  check("app-version reads NEXT_PUBLIC_APP_VERSION", versionSrc.includes("process.env.NEXT_PUBLIC_APP_VERSION"))
  const nextCfg = readFileSync("next.config.ts", "utf-8")
  check("next.config wires the env var from package.json (single source of truth)", nextCfg.includes("NEXT_PUBLIC_APP_VERSION") && nextCfg.includes("readFileSync(\"./package.json\""))
  const sidebarSrc = readFileSync("src/components/audit/sidebar.tsx", "utf-8")
  check("sidebar renders the v-number badge", sidebarSrc.includes("APP_MAJOR") && sidebarSrc.includes("v{APP_MAJOR}"))

  /* ---------------- 7. the fetch script + version sync ---------------- */
  console.log("\n── 7. Fetch script + version sync ──")
  check("fetch script persisted (scripts/fetch-dip-exams.sh)", existsSync("scripts/fetch-dip-exams.sh"))
  const sw = readFileSync("public/sw.js", "utf-8")
  const pkg = JSON.parse(readFileSync("package.json", "utf-8"))
  const major = Number(pkg.version.split(".")[0])
  check("sw: cache stamp tracks the app version (auditedge-v35)", sw.includes(`VERSION = "auditedge-v${major}"`), `v${major}`)
  check("package.json: version is 35.0.0", pkg.version === "35.0.0", pkg.version)
  const chain = pkg.scripts?.test ?? ""
  check("test-v35 wired into the test chain", chain.includes("test-v35"))

  /* ---------------- done ---------------- */
  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
