/**
 * Workpaper template builders (P2-10) — real Excel (.xlsx) and Word (.docx)
 * files generated server-side with exceljs / docx, ready for fieldwork.
 * Bilingual column headers (EN + AR) so the files work in Arabic review too.
 */

import ExcelJS from "exceljs"
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  TextRun,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx"

const BRAND = "AuditEdge Academy — workpaper template"
const HDR_FILL = "FF1E3A5F" // deep audit navy
const SUB_FILL = "FFEEF2F7"

function styleSheet(ws: ExcelJS.Worksheet, widths: number[]) {
  widths.forEach((w, i) => (ws.getColumn(i + 1).width = w))
}

/** 1 — Lead schedule: one TB account rolled forward into the audit file. */
export async function buildLeadSchedule(): Promise<Buffer> {
  const wb = new ExcelJS.Workbook()
  wb.creator = BRAND
  const ws = wb.addWorksheet("Lead Schedule", {
    views: [{ rightToLeft: false }],
  })
  ws.mergeCells("A1:F1")
  ws.getCell("A1").value = "LEAD SCHEDULE — [Account name] | جدول قائد — [اسم الحساب]"
  ws.getCell("A1").font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } }
  ws.getCell("A1").fill = { type: "pattern", pattern: "solid", fgColor: { argb: HDR_FILL } }
  ws.getCell("A1").alignment = { vertical: "middle", horizontal: "center" }
  ws.getRow(1).height = 28

  const meta = [
    ["Client / العميل", "", "Period / الفترة", ""],
    ["Account / الحساب", "", "WP ref / مرجع ورقة العمل", "A-100"],
    ["Prepared by / أعد بواسطة", "", "Date / التاريخ", ""],
    ["Reviewed by / راجعه", "", "Date / التاريخ", ""],
  ]
  meta.forEach((r, i) => {
    const row = ws.getRow(2 + i)
    r.forEach((cell, j) => {
      const c = row.getCell(j + 1)
      c.value = cell
      if (j % 2 === 0) c.font = { bold: true }
      c.border = { bottom: { style: "thin", color: { argb: "FFCCCCCC" } } }
    })
  })

  const head = ["Date", "Particulars / البيان", "Debit / مدين", "Credit / دائن", "Balance / الرصيد", "Tick / علامة"]
  const headerRow = ws.getRow(7)
  head.forEach((h, i) => {
    const c = headerRow.getCell(i + 1)
    c.value = h
    c.font = { bold: true, color: { argb: "FF1E3A5F" } }
    c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: SUB_FILL } }
    c.border = { top: { style: "thin" }, bottom: { style: "thin" } }
  })
  for (let i = 0; i < 14; i++) {
    const row = ws.getRow(8 + i)
    row.getCell(1).value = ""
    row.getCell(6).value = i % 5 === 4 ? "foot" : ""
    for (let j = 1; j <= 6; j++) row.getCell(j).border = { bottom: { style: "hair", color: { argb: "FFDDDDDD" } } }
  }
  const totals = ws.getRow(22)
  totals.getCell(2).value = "Unaudited balance per TB / رصيد غير مراجع"
  totals.getCell(2).font = { bold: true }
  ;[3, 4, 5].forEach((c) =>
    totals.getCell(c).border = { ...totals.getCell(c).border, top: { style: "double" } }
  )
  ws.getRow(24).getCell(2).value = "Audited balance after adjustments / الرصيد المراجع بعد التسويات"
  ws.getRow(24).getCell(2).font = { bold: true }
  ws.getRow(26).getCell(2).value = "Conclusion / الخلاصة: balance is fairly stated / الحساب معروض بعدالة"
  ws.getRow(26).getCell(2).font = { italic: true }
  styleSheet(ws, [12, 44, 14, 14, 15, 10])
  const out = await wb.xlsx.writeBuffer()
  return Buffer.from(out)
}

/** 2 — Bank reconciliation working paper. */
export async function buildBankReconciliation(): Promise<Buffer> {
  const wb = new ExcelJS.Workbook()
  wb.creator = BRAND
  const ws = wb.addWorksheet("Bank Rec")
  ws.mergeCells("A1:D1")
  ws.getCell("A1").value = "BANK RECONCILIATION — [Bank / account] | تسوية بنكية — [البنك / الحساب]"
  ws.getCell("A1").font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } }
  ws.getCell("A1").fill = { type: "pattern", pattern: "solid", fgColor: { argb: HDR_FILL } } 
  ws.getCell("A1").alignment = { vertical: "middle", horizontal: "center" }
  ws.getRow(1).height = 28

  const lines: [string, string, string][] = [
    ["Per bank statement at [date] / رصيد كشف الحساب", "", "C"],
    ["Add: outstanding deposits / إيداعات بالطريق", "", "D"],
    ["Less: unpresented cheques / شيكات لم تُصرف بعد", "", "D"],
    ["Per general ledger at [date] / رصيد الدفاتر", "", "C"],
    ["Bank charges not recorded / عمولات غير مسجلة", "", "D"],
    ["Direct debits not recorded / خصم مباشر غير مسجل", "", "D"],
    ["Standing orders / أوامر دائمة", "", "D"],
    ["Unidentified / credit items not recorded / إيداعات غير مسجلة", "", "D"],
  ]
  const hr = ws.getRow(3)
  ;["Particulars / البيان", "Amount / المبلغ", "Tick", "Ref"].forEach((h, i) => {
    const c = hr.getCell(i + 1)
    c.value = h
    c.font = { bold: true, color: { argb: "FF1E3A5F" } }
    c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: SUB_FILL } }
  })
  lines.forEach((l, i) => {
    const row = ws.getRow(4 + i)
    row.getCell(1).value = l[0]
    row.getCell(1).alignment = { wrapText: true }
    row.getCell(3).value = l[2]
    for (let j = 1; j <= 4; j++) row.getCell(j).border = { bottom: { style: "hair", color: { argb: "FFDDDDDD" } } }
  })
  const recon = ws.getRow(13)
  recon.getCell(1).value = "Reconciled balance / الرصيد بعد التسوية"
  recon.getCell(1).font = { bold: true }
  for (let j = 1; j <= 4; j++)
    recon.getCell(j).border = { ...recon.getCell(j).border, top: { style: "double" } }
  const signoff = ws.getRow(15)
  signoff.getCell(1).value = "Prepared / أعد:" 
  signoff.getCell(3).value = "Reviewed / راجع:"
  ws.getRow(17).getCell(1).value =
    "Note: agree reconciled balance to the bank confirmation reply (ISA 505). / ملاحظة: طابق الرصيد مع رد التأكيد البنكي (معيار التأكيدات الخارجية)"
  ws.getRow(17).getCell(1).font = { italic: true, size: 9 }
  styleSheet(ws, [52, 16, 8, 10])
  const out = await wb.xlsx.writeBuffer()
  return Buffer.from(out)
}

/** 3 — External confirmations control sheet. */
export async function buildConfirmationsControl(): Promise<Buffer> {
  const wb = new ExcelJS.Workbook()
  wb.creator = BRAND
  const ws = wb.addWorksheet("Confirmations Control")
  ws.mergeCells("A1:J1")
  ws.getCell("A1").value =
    "EXTERNAL CONFIRMATIONS CONTROL SHEET | كشف متابعة التأكيدات الخارجية (ISA 505)"
  ws.getCell("A1").font = { bold: true, size: 13, color: { argb: "FFFFFFFF" } }
  ws.getCell("A1").fill = { type: "pattern", pattern: "solid", fgColor: { argb: HDR_FILL } }
  ws.getCell("A1").alignment = { vertical: "middle", horizontal: "center" }
  ws.getRow(1).height = 26

  const headers = [
    "Counterparty / الجهة",
    "Type / النوع",
    "Balance / الرصيد",
    "Sent / أُرسل",
    "1st follow-up / متابعة ١",
    "Reply received / وصل الرد",
    "Agrees / متوافق؟",
    "Exceptions / استثناءات",
    "Alternative procedures / إجراءات بديلة",
    "Conclusion / الخلاصة",
  ]
  const hr = ws.getRow(3)
  headers.forEach((h, i) => {
    const c = hr.getCell(i + 1)
    c.value = h
    c.font = { bold: true, size: 10, color: { argb: "FF1E3A5F" } }
    c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: SUB_FILL } }
    c.alignment = { wrapText: true, vertical: "middle" }
  })
  ws.getRow(3).height = 30
  for (let i = 0; i < 16; i++) {
    const row = ws.getRow(4 + i)
    for (let j = 1; j <= 10; j++) row.getCell(j).border = { bottom: { style: "hair", color: { argb: "FFDDDDDD" } } }
    row.getCell(10).value = i === 0 ? "✓ / confirm / تأكيد" : ""
  }
  ws.getRow(21).getCell(1).value =
    "Positive confirmations with no reply after follow-up → alternative procedures (subsequent receipts, contracts, shipping docs) or evaluate a scope limitation. / في عدم الرد على التأكيد الإيجابي نفّذ إجراءات بديلة أو قيّم قيد النطاق."
  ws.getRow(21).getCell(1).font = { italic: true, size: 9 }
  styleSheet(ws, [22, 12, 14, 11, 13, 13, 10, 20, 24, 16])
  const out = await wb.xlsx.writeBuffer()
  return Buffer.from(out)
}

/** 4 — Going-concern memorandum (docx). */
export async function buildGoingConcernMemo(): Promise<Buffer> {
  const doc = new Document({
    creator: BRAND,
    styles: {
      default: {
        document: { run: { font: "Calibri", size: 22 } },
      },
    },
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "MEMORANDUM — GOING CONCERN ASSESSMENT",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: "مذكرة — تقييم الاستمرارية",
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({ text: "" }),
          metaTable(),
          new Paragraph({ text: "" }),
          new Paragraph({ text: "1. Events and conditions identified", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({
            text: "List the financial, operating and other indicators noted (ISA 570 para 12-16): covenant proximity or breach, recurring operating losses, working-capital deficits, negative operating cash flows, management retirement or key-person dependence, loss of a principal customer or license, litigation, withdrawal of financial support by lenders or owners.",
            bullet: { level: 0 },
          }),
          new Paragraph({ text: "2. Management's assessment and plans", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({
            text: "Summarize management's going-concern assessment period (at least 12 months from the date of approval), and its mitigation plans: asset disposals, borrowing refinancing or restructuring, capital injections, cost reductions, dividend suspensions. State the feasibility evidence obtained for each.",
            bullet: { level: 0 },
          }),
          new Paragraph({ text: "3. Auditor's evaluation", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({
            text: "Document the evaluation of management's plans, the sufficiency of evidence supporting them, and the auditor's conclusion on whether a material uncertainty exists that may cast significant doubt on the entity's ability to continue as a going concern. Note the effect of events after the reporting period (ISA 560) and the reliability of unsigned/conditional support letters.",
            bullet: { level: 0 },
          }),
          new Paragraph({ text: "4. Conclusion and reporting consequence", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({
            text: "State the reporting outcome chosen: (a) adequate disclosure + material uncertainty → Material Uncertainty Related to Going Concern paragraph (ISA 570.22-23); (b) inadequate disclosure → qualified or adverse opinion (ISA 705); (c) use of going-concern basis inappropriate → adverse opinion; (d) management unwilling to extend the assessment → possible scope limitation (disclaimer). Attach the written representation obtained under ISA 580.",
            bullet: { level: 0 },
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            children: [
              new TextRun({ text: "Prepared by / أعد: ", bold: true }),
              new TextRun({ text: "__________________        " }),
              new TextRun({ text: "Reviewed by / راجع: ", bold: true }),
              new TextRun({ text: "__________________" }),
            ],
          }),
        ],
      },
    ],
  })
  const buf = await Packer.toBuffer(doc)
  return Buffer.from(buf)
}

function metaTable() {
  const rows: [string, string][] = [
    ["Client / العميل", ""],
    ["Period covered / الفترة", ""],
    ["WP reference / مرجع ورقة العمل", "GC-100"],
    ["Team / الفريق", ""],
    ["Date / التاريخ", ""],
  ]
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: rows.map(
      ([k, v]) =>
        new TableRow({
          children: [
            new TableCell({
              width: { size: 35, type: WidthType.PERCENTAGE },
              children: [new Paragraph({ children: [new TextRun({ text: k, bold: true })] })],
            }),
            new TableCell({
              width: { size: 65, type: WidthType.PERCENTAGE },
              children: [new Paragraph(v)],
            }),
          ],
        })
    ),
  })
}

export const TEMPLATES = [
  {
    slug: "lead-schedule",
    ext: "xlsx",
    mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    name: "Lead Schedule",
    nameAr: "جدول قائد",
    desc: "Roll-forward working paper for any trial-balance account with tick-mark column.",
    build: buildLeadSchedule,
  },
  {
    slug: "bank-reconciliation",
    ext: "xlsx",
    mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    name: "Bank Reconciliation",
    nameAr: "تسوية بنكية",
    desc: "Statement-to-ledger reconciliation with sign-off and ISA 505 cross-check note.",
    build: buildBankReconciliation,
  },
  {
    slug: "confirmations-control",
    ext: "xlsx",
    mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    name: "Confirmations Control Sheet",
    nameAr: "كشف متابعة التأكيدات",
    desc: "ISA 505 tracker: sent, follow-ups, replies, exceptions, alternative procedures.",
    build: buildConfirmationsControl,
  },
  {
    slug: "going-concern-memo",
    ext: "docx",
    mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    name: "Going-Concern Memo",
    nameAr: "مذكرة الاستمرارية",
    desc: "ISA 570 memorandum skeleton: indicators, management plans, evaluation, reporting consequence.",
    build: buildGoingConcernMemo,
  },
] as const

export type TemplateSlug = (typeof TEMPLATES)[number]["slug"]

export function findTemplate(slug: string) {
  return TEMPLATES.find((t) => t.slug === slug)
}
