// Complete EGY-REG course via API: finish remaining lessons + pass quiz
async function main() {
  const boot = await (await fetch("http://localhost:3000/api/bootstrap")).json()
  const course = boot.courses.find((c) => c.slug === "egypt-regulatory-framework")
  const lessons = course.modules.flatMap((m: any) => m.lessons)
  console.log("EGY-REG lessons:", lessons.map((l: any) => `${l.order}. ${l.title} [${l.type}]`).join("\n"))

  for (const l of lessons) {
    if (l.type === "quiz") {
      // answer all questions correctly
      const q = l.quiz
      const res = await fetch("http://localhost:3000/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizId: q.id, correct: q.questions.length, total: q.questions.length }),
      })
      console.log("quiz submitted:", JSON.stringify(await res.json()))
    } else {
      const res = await fetch("http://localhost:3000/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId: l.id }),
      })
      console.log("lesson done:", l.title, "->", JSON.stringify(await res.json()).slice(0, 120))
    }
  }

  const after = await (await fetch("http://localhost:3000/api/bootstrap")).json()
  console.log("\nXP:", after.user.xp, "| Streak:", after.user.streakDays)
  console.log("CPE hours:", after.courses.reduce((s: number, c: any) =>
    s + c.modules.flatMap((m: any) => m.lessons)
      .filter((l: any) => after.completedLessonIds.includes(l.id))
      .reduce((a: number, l: any) => a + l.durationMin, 0), 0) / 60)
  console.log("Certificates:", JSON.stringify(after.certificates))
}
main()
