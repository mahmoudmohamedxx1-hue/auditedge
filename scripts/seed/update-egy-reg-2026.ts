/**
 * Content update: append a new module to EGY-REG covering the
 * November 2025 FRA overhaul of Egypt's auditing standards (effective Jan 2027),
 * ISA 240 (Revised), the narrow-scope expert amendments, and ISSA 5000.
 * Idempotent: skips if the lesson already exists.
 * Run: bun run scripts/seed/update-egy-reg-2026.ts
 */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

const LESSON_TITLE = "The 2025 Overhaul: New Egyptian Standards & the Road to 2027"
const QUIZ_LESSON_TITLE = "Checkpoint: The 2025–2026 Standards Landscape"

async function main() {
  const course = await db.course.findUnique({ where: { slug: "egypt-regulatory-framework" } })
  if (!course) {
    console.error("EGY-REG course not found — run the main seed first")
    process.exit(1)
  }

  const existing = await db.lesson.findFirst({
    where: { title: LESSON_TITLE },
    include: { module: true },
  })
  if (existing && existing.module.courseId === course.id) {
    console.log("2026 update module already present — nothing to do")
    return
  }

  const moduleCount = await db.module.count({ where: { courseId: course.id } })
  const courseModule = await db.module.create({
    data: {
      courseId: course.id,
      title: "The 2025–2026 Overhaul",
      description:
        "The FRA's comprehensive update of Egypt's auditing standards, ISA 240 (Revised), ISSA 5000 — and what your firm should do before January 2027.",
      order: moduleCount + 1,
    },
  })

  const lesson = await db.lesson.create({
    data: {
      moduleId: courseModule.id,
      title: LESSON_TITLE,
      type: "lesson",
      durationMin: 18,
      xp: 15,
      order: 1,
      content: JSON.stringify({
        intro:
          "In November 2025, the Financial Regulatory Authority approved a comprehensive overhaul of Egypt's auditing standards — the first major rewrite since the 2008 framework. Combined with ISA 240 (Revised) and the arrival of sustainability assurance (ISSA 5000), the 2025–2026 period is the most consequential standards moment in a generation. This lesson maps what changed, when it applies, and what your firm should do about it now.",
        sections: [
          {
            heading: "What the FRA Approved in November 2025",
            body: "The FRA (Financial Regulatory Authority) approved a full modernization package of the Egyptian Standards on Auditing — the first comprehensive update since the 2008 framework. The package modernizes the standards to match the current ISA base, and introduces for the first time a dedicated quality control standard for audit firms, mirroring the international shift from ISQC 1 to ISQM 1. It also tightens documentation expectations in the areas where regulators see the most failures: accounting estimates, fraud risk assessment, and going concern. The new standards take effect for periods beginning on or after January 2027, alongside a dedicated standards track being developed for SMEs.",
            bullets: [
              "First comprehensive overhaul since 2008 — approved by FRA in November 2025",
              "New quality control standard for firms (aligning with the ISQM approach)",
              "Tighter documentation for estimates, fraud risk and going concern",
              "Effective for periods beginning January 2027; SME track under development",
            ],
          },
          {
            heading: "The Timeline Practitioners Must Master",
            body: "Between now and January 2027, the ISA-aligned 2008-based framework continues to govern Egyptian audits. That means every engagement in the current cycle runs under the old standards while firms must simultaneously prepare methodologies, templates and training for the new ones. This dual-track is exactly what happened internationally during the ISA 315 (2019) transition: firms that started gap assessments 18 months early absorbed the change smoothly; firms that waited discovered that documentation redesign, sampling templates and risk-assessment work papers take far longer to update than anyone expects. The lesson for Egyptian firms: treat 2026 as the preparation year, not a grace period.",
            keyPoints: undefined,
          },
          {
            heading: "ISA 240 (Revised) and the 2025 Handbook",
            body: "At the international level, the IAASB issued ISA 240 (Revised) on the auditor's responsibilities relating to fraud, which appears in the 2025 IAASB Handbook. It sharpes fraud-risk procedures, unbundles requirements, and strengthens transparency with those charged with governance. Although not yet effective, Egyptian firms operating international methodologies will encounter it early, and the revised thinking will inevitably color how the FRA expects fraud risk to be documented under the new Egyptian standards. Learn both versions: what applies today, and what is coming.",
          },
          {
            heading: "ISSA 5000: Sustainability Assurance Arrives",
            body: "ISSA 5000, the IAASB's new overarching standard for sustainability assurance, is effective for periods beginning on or after 15 December 2026. Egyptian listed companies increasingly face ESG disclosure expectations from investors, lenders and the FRA — and assurance over those disclosures is a natural extension of audit firms' skills. For an Egyptian audit office, ISSA 5000 is both a compliance horizon and a commercial opportunity: limited and reasonable assurance engagements over sustainability information will need practitioners who combine audit discipline with ESG fluency. The firms that build this muscle now will own the engagement pipeline later.",
          },
          {
            heading: "What Your Firm Should Do Now",
            body: "Preparation beats reaction. Concretely: (1) run a gap assessment of your current methodology, working-paper templates and quality-control manual against the new standards; (2) build a transition calendar working back from January 2027 with owner names on each deliverable; (3) train every level — partners on quality control accountability, managers on documentation depth, juniors on estimates and fraud procedures; (4) pilot the new templates on one or two engagements before mandatory application; and (5) brief clients whose governance and audit committees will ask what changes for them. Offices that do this in 2026 will bill the transition as value; offices that don't will absorb it as rework and review friction.",
            bullets: [
              "Gap assessment: methodology, templates, QC manual vs. the new standards",
              "Transition calendar working back from January 2027 — with owners",
              "Layered training: partners (QC), managers (documentation), juniors (procedures)",
              "Pilot new work papers on live engagements before they are mandatory",
              "Pre-empt client questions with a short briefing for audit committees",
            ],
          },
        ],
        keyPoints: [
          "FRA approved Egypt's first full standards overhaul since 2008 (Nov 2025) — effective periods beginning January 2027",
          "A firm-level quality control standard arrives, plus tighter documentation for estimates, fraud risk and going concern",
          "ISA 240 (Revised) is in the 2025 Handbook — know both current and revised versions",
          "ISSA 5000 sustainability assurance applies from Dec 2026 — a compliance duty and a service opportunity",
          "2026 is the preparation year: gap assessment, calendar, training, pilots",
        ],
        example: {
          title: "The 18-Month Head Start",
          context:
            "A 40-person Cairo firm reads the FRA announcement in November 2025 and decides to wait 'until the standards are clearer.' A competitor of the same size starts a gap assessment that month, redesigns its planning and estimates templates over Q1–Q2 2026, pilots them on three engagements in H2 2026, and trains its whole staff across the year.",
          analysis:
            "By January 2027 the first firm is designing work papers under deadline pressure, re-reviewing files, and explaining fee overruns to clients. The second firm bills the same period as a methodology upgrade, wins the quality conversation with audit committees, and takes on two sustainability-assurance prospects because its staff already speak ISSA 5000. Same regulation, same market — the entire difference is that one firm treated 2026 as the runway and the other as a grace period.",
        },
        takeaway:
          "The standards changed — your preparation window is 2026. Gap-assess, calendar, train, pilot: be the firm that bills the transition, not the one that absorbs it.",
      }),
    },
  })

  const quizLesson = await db.lesson.create({
    data: {
      moduleId: courseModule.id,
      title: QUIZ_LESSON_TITLE,
      type: "quiz",
      durationMin: 8,
      xp: 15,
      order: 2,
      content: JSON.stringify({}),
    },
  })

  await db.quiz.create({
    data: {
      lessonId: quizLesson.id,
      courseId: course.id,
      title: "The 2025–2026 Standards Landscape — Checkpoint",
      passScore: 70,
      questions: JSON.stringify([
        {
          question: "The FRA's November 2025 overhaul of Egypt's auditing standards is the first comprehensive update since which year?",
          options: ["1995", "2008", "2015", "2020"],
          correctIndex: 1,
          explanation:
            "The 2025 package is the first major overhaul of the Egyptian framework since 2008, bringing the standards in line with the current ISA base and adding a firm-level quality control standard.",
        },
        {
          question: "The new Egyptian auditing standards take effect for…",
          options: [
            "Periods beginning on or after January 2027",
            "Fiscal years ending December 2025",
            "Periods beginning on or after December 2026",
            "All engagements signed after November 2025",
          ],
          correctIndex: 0,
          explanation:
            "The effective date is periods beginning on or after January 2027 — which makes 2026 the preparation year for methodology, templates and training.",
        },
        {
          question: "Which area gets tighter DOCUMENTATION requirements under the 2025 overhaul?",
          options: [
            "Only engagement letters",
            "Accounting estimates, fraud risk assessment and going concern",
            "Client acceptance only",
            "Independence declarations only",
          ],
          correctIndex: 1,
          explanation:
            "The FRA package tightens documentation in the high-failure areas: accounting estimates, fraud risk assessment, and going concern — alongside a new quality control standard for firms.",
        },
        {
          question: "What is ISSA 5000?",
          options: [
            "An Egyptian tax standard",
            "The IAASB's new sustainability assurance standard, effective Dec 2026",
            "A revised sampling standard",
            "A CBE circular on bank audits",
          ],
          correctIndex: 1,
          explanation:
            "ISSA 5000 is the IAASB's overarching sustainability assurance standard, effective for periods beginning on or after 15 December 2026 — increasingly relevant to Egyptian listed companies facing ESG expectations.",
        },
        {
          question: "Which of these is the BEST posture for an Egyptian firm during 2026?",
          options: [
            "Wait for full implementation guidance before touching anything",
            "Run a gap assessment, build a transition calendar, train staff and pilot new templates",
            "Immediately apply the 2027 standards to all 2025 engagements",
            "Delegate the whole transition to the junior team",
          ],
          correctIndex: 1,
          explanation:
            "2026 is the preparation window: gap assessment, an owner-named calendar back from January 2027, layered training, and piloting new work papers on live engagements — the approach this lesson walked through.",
        },
      ]),
    },
  })

  console.log(`Added module "${courseModule.title}" with lesson "${lesson.title}" + checkpoint quiz to ${course.code}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
