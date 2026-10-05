/**
 * audit-v38 census — DB + content metrics for the state-of-project audit.
 * Run: bun scripts/audit-v38-census.ts
 */
import { PrismaClient } from "@prisma/client";

const p = new PrismaClient();

const num = (n: number) => n.toLocaleString("en-GB");

const main = async () => {
  const [
    courses, lessons, quizzes, bankQ, arCourses, openCourses,
    materials, sessions, examSessions, aiConversations,
  ] = await Promise.all([
    p.course.count(),
    p.lesson.count(),
    p.quiz.count(),
    p.bankQuestion.count(),
    p.course.count({ where: { category: "Arabic Academy" } }),
    p.course.count({ where: { category: "Open Courses" } }),
    p.material.count(),
    p.session.count(),
    p.examSession.count(),
    p.aiConversation.count(),
  ]);

  const bankByArea = await p.bankQuestion.groupBy({
    by: ["area"],
    _count: { _all: true },
  });
  const bankWithAr = await p.bankQuestion.count({
    where: { stemAr: { not: null } },
  });

  console.log("=== AUDIT V38 CENSUS ===");
  console.log(`courses: ${courses} (Arabic Academy: ${arCourses} · Open Courses: ${openCourses})`);
  console.log(`lessons: ${num(lessons)} · quizzes: ${quizzes}`);
  console.log(`bank questions: ${num(bankQ)} · with Arabic: ${num(bankWithAr)}`);
  console.log(`bank by area: ${bankByArea.map((a) => `${a.area}=${a._count._all}`).join(" · ")}`);
  console.log(`materials: ${num(materials)} · study sessions: ${num(sessions)} · exam sessions: ${num(examSessions)}`);
  console.log(`ai conversations: ${num(aiConversations)}`);
  await p.$disconnect();
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
