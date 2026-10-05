/**
 * v38 — the printable ICQ: a self-contained A4 HTML document rendered into a
 * hidden iframe and handed to the browser's print engine (the user saves it
 * as PDF). Zero new dependencies, works on every modern browser, and honors
 * the app language — including full RTL for the Arabic questionnaire.
 *
 * Two shapes share one builder:
 *   - BLANK fieldwork copy  (evaluation = null) — checkboxes to tick by hand
 *     during the management interview, notes column, signature strip
 *   - COMPLETED assessment  (evaluation set) — answers marked, verdict
 *     banner, component scores, critical failures, gaps, procedures
 *
 * All dynamic text (titles, questions, hints, procedures) is HTML-escaped:
 * questionnaire text can be AI-generated, so nothing may be trusted.
 */
import { tt } from "@/lib/i18n"
import { tocVerdictExplanation, type TocEvaluation } from "@/lib/toc/scoring"
import { TOC_DOMAINS, type TocAnswerMap, type TocDomain, type TocQuestion } from "@/lib/toc/types"

export type IcqPrintProcedure = { title: string; detail?: string; type?: string }

export type IcqPrintOpts = {
  title: string
  subtitle: string
  risks: string[]
  procedures: IcqPrintProcedure[]
  questions: TocQuestion[]
  answers: TocAnswerMap
  coreIds: Set<string>
  /** null → blank fieldwork copy; set → completed assessment printout */
  evaluation: TocEvaluation | null
  lang: "en" | "ar"
}

/* ---------------- helpers ---------------- */

const esc = (s: string): string =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

function domainLabel(domain: TocDomain, lang: "en" | "ar"): string {
  switch (domain) {
    case "control-environment":
      return tt("toc37.domainCE", lang)
    case "risk-assessment":
      return tt("toc37.domainRA", lang)
    case "control-activities":
      return tt("toc37.domainCA", lang)
    case "info-communication":
      return tt("toc37.domainIC", lang)
    case "monitoring":
      return tt("toc37.domainMO", lang)
    default:
      return tt("toc37.domainIT", lang)
  }
}

function verdictLabel(verdict: TocEvaluation["verdict"], lang: "en" | "ar"): string {
  if (verdict === "strong") return tt("toc37.verdictStrong", lang)
  if (verdict === "moderate") return tt("toc37.verdictModerate", lang)
  return tt("toc37.verdictWeak", lang)
}

const VERDICT_COLOR: Record<TocEvaluation["verdict"], string> = {
  strong: "#047857",
  moderate: "#b45309",
  weak: "#b91c1c",
}

const VERDICT_BG: Record<TocEvaluation["verdict"], string> = {
  strong: "rgba(4,120,87,.06)",
  moderate: "rgba(180,83,9,.06)",
  weak: "rgba(185,28,28,.06)",
}

/** A tick-box cell: CSS-drawn box, an ✕ inside when marked. */
function box(on: boolean): string {
  return `<span class="bx${on ? " on" : ""}"></span>`
}

/* ---------------- the document ---------------- */

export function buildIcqPrintHtml(opts: IcqPrintOpts): string {
  const { title, subtitle, risks, procedures, questions, answers, coreIds, evaluation, lang } = opts
  const ar = lang === "ar"
  const dir = ar ? "rtl" : "ltr"
  const L = (k: string) => tt(`toc37.${k}`, lang)

  const complete = evaluation !== null
  const grouped = TOC_DOMAINS.map((d) => ({
    domain: d.id,
    items: questions.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === d.id),
  })).filter((g) => g.items.length > 0)

  const metaRow = (label: string, value = "") =>
    `<div class="meta-cell"><span class="meta-k">${esc(label)}</span><span class="meta-v">${esc(value)}</span></div>`

  const questionRows = grouped
    .map(
      (g) => `
      <tr class="dom-row"><td colspan="6">${esc(domainLabel(g.domain, lang))}</td></tr>
      ${g.items
        .map(({ q, i }) => {
          const a = answers[q.id]
          return `
        <tr>
          <td class="num">${i + 1}</td>
          <td class="q">
            <div class="qtext">${esc(q.q)}${q.critical ? ` <span class="crit">${esc(L("criticalTag"))}</span>` : ""}</div>
            <div class="hint">${esc(L("probe"))}: ${esc(q.hint)}</div>
          </td>
          <td class="ans">${box(a === "yes")}</td>
          <td class="ans">${box(a === "no")}</td>
          <td class="ans">${box(a === "na")}</td>
          <td class="note-cell"></td>
        </tr>`
        })
        .join("")}`
    )
    .join("")

  const domainScoreRows = complete
    ? (evaluation!.domainScores
        .filter((d) => d.possible > 0 || d.answered > 0)
        .map(
          (d) =>
            `<tr><td>${esc(domainLabel(d.domain, lang))}</td><td class="c">${d.earned}/${d.possible}</td><td class="c"><b>${d.pct}%</b></td></tr>`
        )
        .join("") || "")
    : ""

  const gapItems = complete
    ? evaluation!.gaps.map((q) => `<li>${esc(q.q)}</li>`).join("")
    : ""
  const criticalItems = complete
    ? evaluation!.failedCriticals.map((q) => `<li>${esc(q.q)}</li>`).join("")
    : ""

  const procedureItems = procedures
    .map(
      (p) =>
        `<li>${p.type ? `<span class="ptype">${esc(p.type)}</span> ` : ""}<b>${esc(p.title)}</b>${p.detail ? ` — ${esc(p.detail)}` : ""}</li>`
    )
    .join("")

  const today = new Date().toISOString().slice(0, 10)

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — ${esc(L("pdfTitle"))}</title>
<style>
  @page { size: A4; margin: 13mm 11mm 14mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: ${ar ? "'Noto Sans Arabic', 'Segoe UI', 'Tahoma', sans-serif" : "'Segoe UI', 'Helvetica Neue', Arial, sans-serif"};
    font-size: 10pt; line-height: 1.45; color: #17202e; background: #fff;
  }
  .brandbar { display: flex; justify-content: space-between; align-items: baseline;
    border-bottom: 2.5pt solid #1d4ed8; padding-bottom: 6pt; margin-bottom: 10pt; }
  .brand { font-size: 15pt; font-weight: 700; color: #1d4ed8; letter-spacing: .2pt; }
  .brand small { display: block; font-size: 8pt; font-weight: 400; color: #5b6b7a; letter-spacing: 1pt; }
  .doc-kind { font-size: 9pt; color: #475569; text-align: ${ar ? "left" : "right"}; }
  h1 { font-size: 13.5pt; margin: 0 0 3pt; }
  .sub { color: #475569; font-size: 9.5pt; margin: 0 0 8pt; }
  .metagrid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5pt 10pt;
    border: .75pt solid #cbd5e1; border-radius: 4pt; padding: 7pt 9pt; margin-bottom: 10pt; }
  .meta-cell { border-bottom: .5pt dotted #94a3b8; padding-bottom: 3pt; min-height: 16pt; }
  .meta-k { display: block; font-size: 7.2pt; text-transform: uppercase; letter-spacing: .5pt; color: #64748b; }
  .meta-v { font-size: 10pt; }
  .banner { display: flex; justify-content: space-between; align-items: center;
    border: 1.25pt solid ${complete ? VERDICT_COLOR[evaluation!.verdict] : "#cbd5e1"};
    background: ${complete ? VERDICT_BG[evaluation!.verdict] : "#fff"};
    border-radius: 5pt; padding: 8pt 10pt; margin: 8pt 0 10pt; }
  .banner .v { font-size: 12.5pt; font-weight: 700; color: ${complete ? VERDICT_COLOR[evaluation!.verdict] : "#334155"}; }
  .banner .pct { font-size: 19pt; font-weight: 800; color: ${complete ? VERDICT_COLOR[evaluation!.verdict] : "#334155"}; }
  .vexp { font-size: 8.8pt; color: #334155; margin: -6pt 0 10pt; }
  table { width: 100%; border-collapse: collapse; }
  th { background: #eef2f9; font-size: 8.2pt; text-transform: uppercase; letter-spacing: .4pt;
    color: #33415c; padding: 4.5pt 5pt; border: .5pt solid #cbd5e1; text-align: start; }
  td { border: .5pt solid #d7dee9; padding: 4.5pt 5pt; vertical-align: top; }
  .dom-row td { background: #f1f5fb; font-weight: 700; font-size: 9pt; color: #1e3a8a;
    padding: 3.5pt 5pt; }
  .num { width: 16pt; text-align: center; color: #64748b; font-size: 8.5pt; }
  .qtext { font-size: 9.6pt; }
  .hint { font-size: 7.8pt; color: #64748b; margin-top: 1.5pt; }
  .crit { background: #fee2e2; color: #b91c1c; border-radius: 2pt; padding: 0 3pt; font-size: 7pt; font-weight: 700; }
  .ans { width: 26pt; text-align: center; }
  .note-cell { width: 68pt; }
  .bx { display: inline-block; width: 9.5pt; height: 9.5pt; border: .9pt solid #475569;
    border-radius: 1.5pt; vertical-align: middle; position: relative; }
  .bx.on::after { content: "✕"; position: absolute; inset: 0; text-align: center;
    line-height: 9.5pt; font-size: 8pt; font-weight: 800; color: #b91c1c; }
  h2 { font-size: 10.5pt; margin: 12pt 0 5pt; color: #1e3a8a; border-bottom: .75pt solid #cbd5e1; padding-bottom: 2.5pt; }
  ul { margin: 4pt 0 8pt; padding-inline-start: 16pt; }
  li { margin-bottom: 3pt; font-size: 9.3pt; }
  .ptype { display: inline-block; background: #e0e7ff; color: #3730a3; border-radius: 2pt;
    padding: 0 3pt; font-size: 7.3pt; font-weight: 700; text-transform: uppercase; }
  .c { text-align: center; }
  .riskrow { font-size: 8.6pt; color: #475569; margin: 0 0 9pt; }
  .blank-note { font-size: 8.6pt; color: #7c2d12; background: #fff7ed; border: .75pt dashed #fdba74;
    border-radius: 4pt; padding: 5pt 8pt; margin: 0 0 10pt; }
  .signgrid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16pt; margin-top: 16pt; }
  .sign { border-top: .9pt solid #334155; padding-top: 3pt; font-size: 7.8pt; color: #475569; text-align: center; }
  .footer { margin-top: 12pt; border-top: .5pt solid #cbd5e1; padding-top: 4pt;
    display: flex; justify-content: space-between; font-size: 7.6pt; color: #94a3b8; }
  @media print { .bx { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style>
</head>
<body>
  <div class="brandbar">
    <div class="brand">AuditEdge Academy<small>TEST OF CONTROL</small></div>
    <div class="doc-kind">${esc(L("pdfTitle"))}<br>${esc(today)}</div>
  </div>

  <h1>${esc(title)}</h1>
  <p class="sub">${esc(subtitle)}</p>

  <div class="metagrid">
    ${metaRow(L("pdfEntity"))}
    ${metaRow(L("pdfIndustry"), title)}
    ${metaRow(L("pdfDate"), today)}
    ${metaRow(L("pdfAuditor"))}
    ${metaRow(L("pdfRespondent"))}
    ${metaRow(complete ? `${L("pdfScore")}` : `${L("pdfVerdict")}`, complete ? `${evaluation!.pct}% (${evaluation!.earnedWeight}/${evaluation!.possibleWeight})` : "—")}
  </div>

  ${
    risks.length
      ? `<p class="riskrow"><b>${esc(L("pdfKeyRisks"))}:</b> ${risks.map((r) => esc(r)).join(" · ")}</p>`
      : ""
  }

  ${complete ? `<div class="banner"><span class="v">${esc(verdictLabel(evaluation!.verdict, lang))}</span><span class="pct">${evaluation!.pct}%</span></div>
  <p class="vexp">${esc(tocVerdictExplanation(evaluation!.verdict))}</p>` : `<p class="blank-note">${esc(L("pdfBlankNote"))}</p>`}

  <table>
    <thead>
      <tr>
        <th style="width:16pt">#</th>
        <th>${esc(L("pdfQuestion"))}</th>
        <th class="ans">${esc(L("yes"))}</th>
        <th class="ans">${esc(L("no"))}</th>
        <th class="ans">${esc(L("na"))}</th>
        <th>${esc(L("pdfNotes"))}</th>
      </tr>
    </thead>
    <tbody>${questionRows}</tbody>
  </table>

  ${
    complete
      ? `<h2>${esc(L("domainScores"))}</h2>
    <table><tbody>${domainScoreRows}</tbody></table>
    ${
      criticalItems
        ? `<h2>${esc(L("criticalFailures"))}</h2><ul>${criticalItems}</ul>`
        : ""
    }
    ${gapItems ? `<h2>${esc(L("gaps"))}</h2><ul>${gapItems}</ul>` : ""}`
      : ""
  }

  ${procedureItems ? `<h2>${esc(L("proceduresTitle"))}</h2><ul>${procedureItems}</ul>` : ""}

  <div class="signgrid">
    <div class="sign">${esc(L("pdfAuditor"))}</div>
    <div class="sign">${esc(L("pdfRespondent"))}</div>
    <div class="sign">${esc(L("pdfDate"))}</div>
  </div>

  <div class="footer">
    <span>${esc(L("pdfGenerated"))} — ${esc(today)}</span>
    <span>COSO 2013 · ISA 315/330</span>
  </div>
</body>
</html>`
}

/** Render the questionnaire into a hidden iframe and open the print dialog
 *  (the user picks "Save as PDF"). Safe against popup blockers. */
export function printIcq(opts: IcqPrintOpts): void {
  if (typeof document === "undefined") return
  const html = buildIcqPrintHtml(opts)
  const frame = document.createElement("iframe")
  frame.setAttribute("aria-hidden", "true")
  frame.tabIndex = -1
  frame.style.cssText =
    "position:fixed;right:0;bottom:0;width:1px;height:1px;border:0;opacity:0;pointer-events:none;"
  frame.onload = () => {
    try {
      frame.contentWindow?.focus()
      frame.contentWindow?.print()
    } catch {
      /* the user can still Ctrl+P the main page — never block the UI */
    }
    setTimeout(() => frame.remove(), 60_000)
  }
  frame.srcdoc = html
  document.body.appendChild(frame)
}
