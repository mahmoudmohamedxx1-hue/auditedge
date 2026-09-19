/**
 * AuditEdge v2 migration:
 * - Promote the office owner (main user) to admin
 * - Map legacy accent keys to the new warm palette
 * - Register the generated sample PDFs as materials
 */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

const ACCENT_MAP: Record<string, string> = {
  emerald: "sage",
  gold: "sand",
  teal: "olive",
  rose: "plum",
  violet: "plum",
  orange: "terracotta",
}

const SAMPLES = [
  {
    fileName: "sample-isa315-reference.pdf",
    originalName: "ISA 315 (2019) — Risk Assessment Quick Reference.pdf",
    title: "ISA 315 Risk Assessment Quick Reference",
    description:
      "Condensed study companion for the 2019 revision: the five risk assessment steps, what changed, and common documentation gaps.",
    category: "Standards",
    sizeBytes: 0,
  },
  {
    fileName: "sample-engagement-checklist.pdf",
    originalName: "External Audit Engagement Checklist — Planning Phase.pdf",
    title: "Engagement Planning Checklist",
    description:
      "Planning-phase working paper aide aligned with the ISAs and Egyptian Standards on Auditing — acceptance, risk, Egyptian context, team.",
    category: "Working Papers",
    sizeBytes: 0,
  },
  {
    fileName: "sample-ethics-summary.pdf",
    originalName: "IESBA Code of Ethics — Fundamental Principles Summary Card.pdf",
    title: "IESBA Ethics Principles Card",
    description:
      "The five fundamental principles, the five threat categories, and the safeguards every engagement team should apply.",
    category: "Reference",
    sizeBytes: 0,
  },
]

async function main() {
  // 1. promote the office owner
  const owner = await db.user.findFirst({ where: { isDemo: false } })
  if (owner) {
    await db.user.update({
      where: { id: owner.id },
      data: { role: "admin", jobTitle: "Managing Partner" },
    })
    console.log(`Owner promoted: ${owner.name} (${owner.email}) -> admin`)
  }

  // 2. remap accents
  const courses = await db.course.findMany()
  for (const c of courses) {
    const mapped = ACCENT_MAP[c.accent]
    if (mapped && mapped !== c.accent) {
      await db.course.update({ where: { id: c.id }, data: { accent: mapped } })
    }
  }
  console.log(`Accents remapped for ${courses.length} courses`)

  // 3. register sample materials
  const fs = await import("fs")
  const path = await import("path")
  const dir = "/home/z/my-project/upload/materials"
  const adminId = owner?.id ?? null
  for (const s of SAMPLES) {
    const exists = await db.material.findUnique({ where: { fileName: s.fileName } })
    if (exists) {
      console.log(`skip existing: ${s.fileName}`)
      continue
    }
    const p = path.join(dir, s.fileName)
    if (!fs.existsSync(p)) {
      console.log(`MISSING FILE: ${p}`)
      continue
    }
    await db.material.create({
      data: {
        title: s.title,
        description: s.description,
        category: s.category,
        fileName: s.fileName,
        originalName: s.originalName,
        mimeType: "application/pdf",
        sizeBytes: fs.statSync(p).size,
        uploadedById: adminId,
      },
    })
    console.log(`material created: ${s.title}`)
  }

  const mats = await db.material.count()
  console.log(`Total materials: ${mats}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
