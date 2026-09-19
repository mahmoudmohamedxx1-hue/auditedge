"use client"

import { useAppStore } from "@/store/useAppStore"
import { courseLessons, courseProgress, CertificateSeal } from "./shared"
import { tt, dateLocaleOf } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Printer, ShieldCheck } from "lucide-react"

export function CertificateView() {
  const data = useAppStore((s) => s.data)
  const courseId = useAppStore((s) => s.selectedCourseId)
  const navigate = useAppStore((s) => s.navigate)
  const lang = useAppStore((s) => s.lang)
  if (!data) return null

  const course = data.courses.find((c) => c.id === courseId)
  const cert = data.certificates.find((c) => c.courseId === courseId)
  if (!course) return null

  const prog = courseProgress(data.completedLessonIds, course)
  const issued = cert ? new Date(cert.issuedAt) : new Date()
  const hasQuiz = courseLessons(course).some((l) => l.type === "quiz")

  return (
    <div className="mx-auto max-w-3xl">
      <button
        onClick={() => navigate("achievements")}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring"
      >
        <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {tt("cert.backToAchievements", lang)}
      </button>

      {cert ? (
        <>
          <div className="print-cert relative mt-6 overflow-hidden rounded-2xl border-2 border-gold/50 bg-white p-2 shadow-soft">
            {/* inner frame */}
            <div className="relative rounded-[1.1rem] border border-gold/40 p-8 sm:p-14">
              <div className="relative text-center">
                <div className="flex items-center justify-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                      <path d="M12 22V12M4 7l8 5 8-5" />
                    </svg>
                  </span>
                  <div className="text-start leading-none">
                    <div className="font-serif text-lg font-semibold tracking-tight">AuditEdge</div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary">
                      {lang === "ar" ? "مساحة العمل" : "Workspace"}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    {tt("cert.ofCompletion", lang)}
                  </p>
                  <p className="mt-6 text-[13px] text-muted-foreground">{tt("cert.thisCertifies", lang)}</p>
                  <p className="mt-2.5 font-serif text-[30px] font-semibold tracking-tight sm:text-[34px]">
                    {data.user.name}
                  </p>
                  <p className="mt-1.5 text-[13px] text-muted-foreground">{data.user.jobTitle}</p>
                  <p className="mt-6 text-[13px] text-muted-foreground">{tt("cert.hasCompleted", lang)}</p>
                  <p dir="auto" className="mx-auto mt-2.5 max-w-lg font-serif text-[19px] font-semibold leading-snug sm:text-[21px]">
                    {course.code} — {course.title}
                  </p>
                  <p className="mt-3 text-[13px] text-muted-foreground">
                    {course.cpeHours} {tt("cert.cpeLessons", lang)} · {prog.total} {tt("cert.lessonsWord", lang)}
                    {hasQuiz ? ` · ${tt("cert.knowledgeCheck", lang)}` : ""}
                  </p>
                </div>

                <div className="mt-12 flex items-end justify-between gap-6 text-start">
                  <div>
                    <div className="font-serif text-[15px] font-semibold italic">
                      {course.instructorName || tt("cert.trainingProgram", lang)}
                    </div>
                    <div className="mt-0.5 border-t border-border pt-1 text-[10.5px] text-muted-foreground">
                      {course.instructorTitle || "AuditEdge Workspace"}
                    </div>
                  </div>
                  <CertificateSeal />
                  <div>
                    <div className="font-serif text-[15px] font-semibold italic">
                      {issued.toLocaleDateString(dateLocaleOf(lang), { day: "numeric", month: "long", year: "numeric" })}
                    </div>
                    <div className="mt-0.5 border-t border-border pt-1 text-[10.5px] text-muted-foreground">
                      {tt("cert.dateOfIssue", lang)}
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-center gap-1.5 text-[10.5px] text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {tt("cert.serial", lang)} {cert.serial} · {tt("cert.verifyNote", lang)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
            <Button onClick={() => window.print()} className="h-10">
              <Printer className="me-1.5 h-4 w-4" /> {tt("cert.print", lang)}
            </Button>
            <Button variant="outline" onClick={() => navigate("achievements")} className="h-10">
              {tt("cert.allCertificates", lang)}
            </Button>
          </div>
        </>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed bg-card/60 py-16 text-center">
          <CertificateSeal className="mx-auto opacity-60" />
          <h1 className="mt-4 font-serif text-[22px] font-semibold">{tt("cert.notIssued", lang)}</h1>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            {tt("cert.notIssuedExplainer", lang)}
          </p>
          <Button className="mt-6" onClick={() => navigate("course", { courseId: course.id })}>
            {tt("cert.continueCourse", lang)} ({prog.pct}% {tt("cert.done", lang)})
          </Button>
        </div>
      )}
    </div>
  )
}
