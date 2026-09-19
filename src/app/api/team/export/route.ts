import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdminSession } from "@/lib/auth"

export const runtime = "nodejs"

function csvCell(v: unknown): string {
  let s = String(v ?? "")
  // neutralize CSV formula injection (=, +, -, @ prefixes execute as formulas in Excel)
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function csvRow(cells: unknown[]): string {
  return cells.map(csvCell).join(",")
}

/**
 * CPE evidence report (CSV) — one row per earned certificate,
 * plus a summary row per member and a grand total.
 * Admin only.
 */
export async function GET() {
  const admin = await requireAdminSession()
  if (!admin) {
    return NextResponse.json({ error: "Only admins can export the CPE report" }, { status: 403 })
  }

  const users = await db.user.findMany({
    orderBy: [{ xp: "desc" }, { name: "asc" }],
    include: {
      certificates: { include: { course: true }, orderBy: { issuedAt: "desc" } },
      lessonProgress: { select: { id: true } },
      quizAttempts: { select: { quizId: true, passed: true } },
      enrollments: { select: { id: true } },
    },
  })

  const lines: string[] = []
  lines.push(csvRow(["AuditEdge — CPE Report"]))
  lines.push(csvRow(["Generated", new Date().toLocaleString("en-GB")]))
  lines.push("")

  // Section 1 — per-certificate evidence
  lines.push(csvRow(["MEMBER", "EMAIL", "ROLE", "COURSE CODE", "COURSE TITLE", "CPE HOURS", "CERTIFICATE SERIAL", "ISSUED AT"]))
  let totalHours = 0
  let totalCerts = 0
  for (const u of users) {
    for (const c of u.certificates) {
      totalHours += c.course.cpeHours
      totalCerts++
      lines.push(
        csvRow([
          u.name,
          u.email,
          u.role,
          c.course.code,
          c.course.title,
          c.course.cpeHours,
          c.serial,
          c.issuedAt.toLocaleDateString("en-GB"),
        ])
      )
    }
  }
  lines.push("")

  // Section 2 — member summary
  lines.push(csvRow(["MEMBER SUMMARY"]))
  lines.push(csvRow(["MEMBER", "EMAIL", "ROLE", "JOB TITLE", "XP", "LESSONS COMPLETED", "QUIZZES PASSED", "CERTIFICATES", "CPE HOURS EARNED", "LAST ACTIVE"]))
  for (const u of users) {
    const hours = u.certificates.reduce((s, c) => s + c.course.cpeHours, 0)
    lines.push(
      csvRow([
        u.name,
        u.email,
        u.role,
        u.jobTitle,
        u.xp,
        u.lessonProgress.length,
        // count DISTINCT quizzes passed — re-passing the same quiz many times
        // must not inflate the evidence report
        new Set(u.quizAttempts.filter((a) => a.passed).map((a) => a.quizId)).size,
        u.certificates.length,
        hours,
        u.lastActiveAt.toLocaleDateString("en-GB"),
      ])
    )
  }
  lines.push("")
  lines.push(csvRow(["TOTAL", "", "", "", "", "", "", totalCerts, totalHours]))

  const csv = "\uFEFF" + lines.join("\n") // BOM so Excel reads Arabic/UTF-8 correctly
  const stamp = new Date().toISOString().slice(0, 10)
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="auditedge-cpe-report-${stamp}.csv"`,
    },
  })
}
