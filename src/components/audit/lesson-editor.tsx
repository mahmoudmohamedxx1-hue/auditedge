"use client"

import { useMemo, useState } from "react"
import { LessonInput } from "@/store/useAppStore"
import { Lesson, formatBytes } from "@/lib/audit-types"
import { useAppStore } from "@/store/useAppStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { tt } from "@/lib/i18n"
import { Link2, Loader2, Paperclip, Plus, Save, Search, Trash2, X } from "lucide-react"

const LETTERS = ["A", "B", "C", "D", "E", "F"]

export function LessonEditor({
  lesson,
  onSave,
  onClose,
}: {
  lesson: Lesson
  /** Return true when the save succeeded — the editor stays open on failure. */
  onSave: (input: LessonInput) => Promise<boolean>
  onClose: () => void
}) {
  const data = useAppStore((s) => s.data)
  const lang = useAppStore((s) => s.lang)
  const [tab, setTab] = useState<"content" | "quiz" | "files">(lesson.type === "quiz" ? "quiz" : "content")
  const [busy, setBusy] = useState(false)

  const [title, setTitle] = useState(lesson.title)
  const [durationMin, setDurationMin] = useState(lesson.durationMin)
  const [xp, setXp] = useState(lesson.xp)
  const [intro, setIntro] = useState(lesson.content.intro ?? "")
  const [sections, setSections] = useState(
    (lesson.content.sections ?? []).map((s) => ({ heading: s.heading, body: s.body, bullets: s.bullets ?? [] }))
  )
  const [keyPoints, setKeyPoints] = useState(lesson.content.keyPoints ?? [])
  const [example, setExample] = useState(
    lesson.content.example ?? { title: "", context: "", analysis: "" }
  )
  const [hasExample, setHasExample] = useState(!!lesson.content.example)
  const [takeaway, setTakeaway] = useState(lesson.content.takeaway ?? "")
  const [videoUrl, setVideoUrl] = useState(lesson.videoUrl ?? "")
  const [externalUrl, setExternalUrl] = useState(lesson.externalUrl ?? "")
  const [attachments, setAttachments] = useState<string[]>(lesson.attachments ?? [])
  const [materialQuery, setMaterialQuery] = useState("")
  const [quizTitle, setQuizTitle] = useState(lesson.quiz?.title ?? lesson.title)
  const [passScore, setPassScore] = useState(lesson.quiz?.passScore ?? 70)
  const [questions, setQuestions] = useState(
    lesson.quiz?.questions?.length
      ? lesson.quiz.questions.map((q) => ({ ...q, options: [...q.options] }))
      : [{ question: "", options: ["", "", "", ""], correctIndex: 0, explanation: "" }]
  )

  const isQuiz = lesson.type === "quiz"

  // searchable view of the attachment picker — the library holds 146+ documents
  const materialResults = useMemo(() => {
    if (!data) return []
    const q = materialQuery.trim().toLowerCase()
    if (!q) return data.materials
    const terms = q.split(/\s+/).filter(Boolean)
    return data.materials.filter((m) =>
      terms.every(
        (t) =>
          m.title.toLowerCase().includes(t) ||
          (m.description ?? "").toLowerCase().includes(t) ||
          m.category.toLowerCase().includes(t)
      )
    )
  }, [data, materialQuery])

  const submit = async () => {
    if (isQuiz) {
      // client-side mirror of the server guard: a quiz lesson must keep at
      // least one complete question, and the author must KNOW when an
      // incomplete question is being dropped instead of silently losing it
      const valid = questions.filter(
        (q) => q.question.trim() && q.options.filter((o) => o.trim()).length >= 2
      )
      const dropped = questions.length - valid.length
      if (!valid.length) {
        toast.error(
          lang === "ar"
            ? "الاختبار يحتاج سؤالًا كاملًا واحدًا على الأقل"
            : "A knowledge check needs at least one complete question",
          {
            description:
              lang === "ar"
                ? "كل سؤال يحتاج نصه وخيارين مملوءين على الأقل."
                : "Every question needs its text and at least two filled-in options.",
          }
        )
        return
      }
      if (dropped > 0) {
        toast.warning(
          lang === "ar"
            ? `${dropped} سؤال غير مكتمل لن يُحفظ`
            : `${dropped} incomplete question${dropped > 1 ? "s" : ""} will not be saved`,
          {
            description:
              lang === "ar"
                ? "تُتخطى الأسئلة الناقصة النص أو الأقل من خيارين مملوءين."
                : "Questions missing text or with fewer than two filled options are skipped.",
          }
        )
      }
    }
    setBusy(true)
    const cleanSections = sections
      .filter((s) => s.heading.trim() || s.body.trim())
      .map((s) => ({
        heading: s.heading.trim() || (lang === "ar" ? "قسم" : "Section"),
        body: s.body,
        bullets: s.bullets.filter((b) => b.trim()),
      }))
    const input: LessonInput = {
      title: title.trim() || (lang === "ar" ? "درس بلا عنوان" : "Untitled lesson"),
      type: lesson.type,
      durationMin,
      xp,
      content: {
        intro,
        sections: cleanSections,
        keyPoints: keyPoints.filter((k) => k.trim()),
        example: hasExample && (example.title || example.context) ? example : undefined,
        takeaway,
      },
      attachments,
      videoUrl: videoUrl.trim(),
      externalUrl: externalUrl.trim(),
      quiz: isQuiz
        ? {
            title: quizTitle.trim() || title.trim(),
            passScore,
            questions: questions
              .filter((q) => q.question.trim() && q.options.filter((o) => o.trim()).length >= 2)
              .map((q) => {
                // remap the correct index through the blank-option filter
                const kept = q.options
                  .map((o, i) => ({ o: o.trim(), i }))
                  .filter((x) => x.o)
                const keptCorrect = kept.findIndex((x) => x.i === q.correctIndex)
                return {
                  question: q.question.trim(),
                  options: kept.map((x) => x.o),
                  correctIndex: keptCorrect >= 0 ? keptCorrect : 0,
                  explanation: q.explanation,
                }
              }),
          }
        : null,
    }
    const ok = await onSave(input)
    setBusy(false)
    if (ok) onClose()
  }

  const toggleAttachment = (id: string, checked: boolean) => {
    setAttachments((a) => (checked ? [...a, id] : a.filter((x) => x !== id)))
  }

  return (
    <Dialog open onOpenChange={(o) => (!o ? onClose() : null)}>
      <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-[680px]">
        <DialogHeader className="pb-0">
          <DialogTitle className="font-serif text-[19px]">
            {isQuiz
              ? lang === "ar" ? "تحرير الاختبار" : "Edit knowledge check"
              : tt("builder.editLessonTitle", lang)}
          </DialogTitle>
          <DialogDescription>
            {isQuiz
              ? lang === "ar"
                ? "أسئلة بتغذية راجعة فورية مشروحة لفريقك."
                : "Questions with instant explained feedback for your team."
              : lang === "ar"
                ? "اكتب الدرس الذي سيقرؤه فريقك — أقسام ونقاط أساسية ومواد."
                : "Write the lesson your team will read — sections, key points and materials."}
          </DialogDescription>
        </DialogHeader>

        {/* tabs */}
        <div className="flex gap-1 rounded-lg bg-secondary/60 p-1">
          {(isQuiz
            ? [
                { id: "quiz" as const, label: tt("builder.questions", lang) },
                { id: "files" as const, label: tt("builder.materials", lang) },
              ]
            : [
                { id: "content" as const, label: tt("builder.content", lang) },
                { id: "files" as const, label: tt("builder.materials", lang) },
              ]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "flex-1 rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors focus-ring",
                tab === t.id ? "bg-card text-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t.label}
              {t.id === "files" && attachments.length > 0 ? ` (${attachments.length})` : ""}
            </button>
          ))}
        </div>

        {tab === "content" && (
          <div className="space-y-5">
            <div className="grid grid-cols-[1fr_100px_90px] gap-3">
              <div className="space-y-1.5">
                <Label className="text-[13px]">{tt("builder.titleLabel", lang)}</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} className="h-9" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[13px]">{lang === "ar" ? "دقائق" : "Minutes"}</Label>
                <Input
                  type="number"
                  min={1}
                  value={durationMin}
                  onChange={(e) => setDurationMin(Number(e.target.value))}
                  className="h-9"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[13px]">{tt("builder.xp", lang)}</Label>
                <Input type="number" min={0} value={xp} onChange={(e) => setXp(Number(e.target.value))} className="h-9" />
              </div>
            </div>

            {!isQuiz && (
              <div className="space-y-1.5">
                <Label className="flex items-center gap-1 text-[13px]">
                  <Link2 className="h-3 w-3 text-muted-foreground" />{" "}
                  {lang === "ar" ? "فيديو (يوتيوب، اختياري)" : "Video (YouTube, optional)"}
                </Label>
                <Input
                  dir="ltr"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=…"
                  className="h-9"
                />
              </div>
            )}

            {!isQuiz && (
              <div className="space-y-1.5">
                <Label className="flex items-center gap-1 text-[13px]">
                  <Link2 className="h-3 w-3 text-muted-foreground" />{" "}
                  {lang === "ar" ? "رابط خارجي (اختياري)" : "External link (optional)"}
                </Label>
                <Input
                  dir="ltr"
                  value={externalUrl}
                  onChange={(e) => setExternalUrl(e.target.value)}
                  placeholder="https://…"
                  className="h-9"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <Label className="text-[13px]">{tt("builder.introLabel", lang)}</Label>
              <Textarea
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                placeholder={
                  lang === "ar"
                    ? "مهّد في جملتين أو ثلاث — لماذا يهم هذا في مهمة المراجعة؟"
                    : "Set the scene in two or three sentences — why does this matter on an engagement?"
                }
                className="min-h-[64px]"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-[13px]">{lang === "ar" ? "الأقسام" : "Sections"}</Label>
              {sections.map((s, i) => (
                <div key={i} className="rounded-xl border bg-secondary/25 p-3.5">
                  <div className="flex items-center gap-2">
                    <Input
                      value={s.heading}
                      onChange={(e) =>
                        setSections((arr) => arr.map((x, xi) => (xi === i ? { ...x, heading: e.target.value } : x)))
                      }
                      placeholder={`${tt("builder.sectionWord", lang)} ${i + 1}`}
                      className="h-8"
                    />
                    <button
                      onClick={() => setSections((arr) => arr.filter((_, xi) => xi !== i))}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-ring"
                      aria-label={lang === "ar" ? "إزالة القسم" : "Remove section"}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <Textarea
                    value={s.body}
                    onChange={(e) =>
                      setSections((arr) => arr.map((x, xi) => (xi === i ? { ...x, body: e.target.value } : x)))
                    }
                    placeholder={lang === "ar" ? "جوهر القسم…" : "The substance of the section…"}
                    className="mt-2 min-h-[70px]"
                  />
                  <div className="mt-2 space-y-1.5">
                    {s.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        <Input
                          value={b}
                          onChange={(e) =>
                            setSections((arr) =>
                              arr.map((x, xi) =>
                                xi === i ? { ...x, bullets: x.bullets.map((y, yi) => (yi === bi ? e.target.value : y)) } : x
                              )
                            )
                          }
                          placeholder={lang === "ar" ? "نقطة" : "Bullet point"}
                          className="h-8"
                        />
                        <button
                          onClick={() =>
                            setSections((arr) =>
                              arr.map((x, xi) => (xi === i ? { ...x, bullets: x.bullets.filter((_, yi) => yi !== bi) } : x))
                            )
                          }
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-ring"
                          aria-label={lang === "ar" ? "إزالة النقطة" : "Remove bullet"}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() =>
                        setSections((arr) => arr.map((x, xi) => (xi === i ? { ...x, bullets: [...x.bullets, ""] } : x)))
                      }
                      className="text-[12px] font-medium text-primary hover:underline focus-ring"
                    >
                      + {lang === "ar" ? "نقطة" : "bullet"}
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setSections((arr) => [...arr, { heading: "", body: "", bullets: [] }])}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed py-2.5 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-ring"
              >
                <Plus className="h-3.5 w-3.5" /> {tt("builder.addSection", lang)}
              </button>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[13px]">{tt("builder.keyPoints", lang)}</Label>
              {keyPoints.map((k, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Input
                    value={k}
                    onChange={(e) => setKeyPoints((arr) => arr.map((x, xi) => (xi === i ? e.target.value : x)))}
                    placeholder={
                      lang === "ar"
                        ? "خلاصة حاسمة يجب أن يتذكرها الفريق"
                        : "One crisp takeaway the team must remember"
                    }
                    className="h-8"
                  />
                  <button
                    onClick={() => setKeyPoints((arr) => arr.filter((_, xi) => xi !== i))}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-ring"
                    aria-label={lang === "ar" ? "إزالة نقطة" : "Remove key point"}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => setKeyPoints((arr) => [...arr, ""])}
                className="text-[12px] font-medium text-primary hover:underline focus-ring"
              >
                + {lang === "ar" ? "نقطة أساسية" : "key point"}
              </button>
            </div>

            <div className="rounded-xl border bg-secondary/25 p-3.5">
              <label className="flex items-center gap-2 text-[13px] font-medium">
                <Checkbox checked={hasExample} onCheckedChange={(v) => setHasExample(v === true)} />
                {lang === "ar" ? "إدراج حالة ميدانية (مثال محلول)" : "Include a field case (worked example)"}
              </label>
              {hasExample && (
                <div className="mt-3 space-y-2">
                  <Input
                    value={example.title}
                    onChange={(e) => setExample((x) => ({ ...x, title: e.target.value }))}
                    placeholder={lang === "ar" ? "عنوان الحالة — مثل: ذمم دلتا للنسيج" : "Case title — e.g. The Delta Textiles receivable"}
                    className="h-8"
                  />
                  <Textarea
                    value={example.context}
                    onChange={(e) => setExample((x) => ({ ...x, context: e.target.value }))}
                    placeholder={lang === "ar" ? "الوضع — ما واجهه الفريق في المهمة" : "Situation — what the team encountered on the engagement"}
                    className="min-h-[56px]"
                  />
                  <Textarea
                    value={example.analysis}
                    onChange={(e) => setExample((x) => ({ ...x, analysis: e.target.value }))}
                    placeholder={lang === "ar" ? "التحليل — كيف حُسمت المسألة وفق المعايير" : "Analysis — how it was resolved under the standards"}
                    className="min-h-[56px]"
                  />
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <Label className="text-[13px]">{tt("builder.takeaway", lang)}</Label>
              <Textarea
                value={takeaway}
                onChange={(e) => setTakeaway(e.target.value)}
                placeholder={lang === "ar" ? "فكرة ختامية ترسّخ الدرس" : "One closing thought that anchors the lesson"}
                className="min-h-[56px]"
              />
            </div>
          </div>
        )}

        {tab === "quiz" && (
          <div className="space-y-5">
            <div className="grid grid-cols-[1fr_120px] gap-3">
              <div className="space-y-1.5">
                <Label className="text-[13px]">{tt("builder.quizTitle", lang)}</Label>
                <Input value={quizTitle} onChange={(e) => setQuizTitle(e.target.value)} className="h-9" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[13px]">{lang === "ar" ? "النجاح %" : "Pass %"}</Label>
                <Input
                  type="number"
                  min={10}
                  max={100}
                  value={passScore}
                  onChange={(e) => setPassScore(Number(e.target.value))}
                  className="h-9"
                />
              </div>
            </div>

            {questions.map((q, qi) => (
              <div key={qi} className="rounded-xl border bg-secondary/25 p-3.5">
                <div className="flex items-center gap-2">
                  <span className="shrink-0 font-mono text-[11px] text-muted-foreground">Q{qi + 1}</span>
                  <Input
                    value={q.question}
                    onChange={(e) =>
                      setQuestions((arr) => arr.map((x, xi) => (xi === qi ? { ...x, question: e.target.value } : x)))
                    }
                    placeholder={lang === "ar" ? "السؤال" : "The question"}
                    className="h-8"
                  />
                  <button
                    onClick={() => setQuestions((arr) => arr.filter((_, xi) => xi !== qi))}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-ring"
                    aria-label={tt("builder.deleteQuestion", lang)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="mt-2.5 space-y-1.5">
                  {q.options.map((opt, oi) => (
                    <div key={oi} className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setQuestions((arr) =>
                            arr.map((x, xi) => (xi === qi ? { ...x, correctIndex: oi } : x))
                          )
                        }
                        title={tt("builder.correct", lang)}
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10.5px] font-semibold transition-colors focus-ring",
                          q.correctIndex === oi
                            ? "border-sage bg-sage text-white"
                            : "border-border bg-card text-muted-foreground hover:border-sage"
                        )}
                        aria-label={`${tt("builder.correct", lang)} ${LETTERS[oi]}`}
                      >
                        {LETTERS[oi]}
                      </button>
                      <Input
                        value={opt}
                        onChange={(e) =>
                          setQuestions((arr) =>
                            arr.map((x, xi) =>
                              xi === qi ? { ...x, options: x.options.map((y, yi) => (yi === oi ? e.target.value : y)) } : x
                            )
                          )
                        }
                        placeholder={`${lang === "ar" ? "خيار" : "Option"} ${LETTERS[oi]}`}
                        className="h-8"
                      />
                      {q.options.length > 2 && (
                        <button
                          onClick={() =>
                            setQuestions((arr) =>
                              arr.map((x, xi) =>
                                xi === qi
                                  ? {
                                      ...x,
                                      options: x.options.filter((_, yi) => yi !== oi),
                                      // deleting an option before the correct one shifts the answer key
                                      correctIndex:
                                        oi < x.correctIndex
                                          ? x.correctIndex - 1
                                          : Math.min(x.correctIndex, x.options.length - 2),
                                    }
                                  : x
                              )
                            )
                          }
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-ring"
                          aria-label={lang === "ar" ? "إزالة خيار" : "Remove option"}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() =>
                      setQuestions((arr) =>
                        arr.map((x, xi) => (xi === qi ? { ...x, options: [...x.options, ""] } : x))
                      )
                    }
                    className="text-[12px] font-medium text-primary hover:underline focus-ring"
                    disabled={q.options.length >= 6}
                  >
                    + {lang === "ar" ? "خيار" : "option"}
                  </button>
                </div>
                <Textarea
                  value={q.explanation}
                  onChange={(e) =>
                    setQuestions((arr) => arr.map((x, xi) => (xi === qi ? { ...x, explanation: e.target.value } : x)))
                  }
                  placeholder={
                    lang === "ar"
                      ? "توضيح يظهر بعد الإجابة — علّم السبب"
                      : "Explanation shown after answering — teach the why"
                  }
                  className="mt-2.5 min-h-[56px]"
                />
              </div>
            ))}
            <button
              onClick={() =>
                setQuestions((arr) => [...arr, { question: "", options: ["", "", "", ""], correctIndex: 0, explanation: "" }])
              }
              className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed py-2.5 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-ring"
            >
              <Plus className="h-3.5 w-3.5" /> {tt("builder.addQuestion", lang)}
            </button>
          </div>
        )}

        {tab === "files" && (
          <div className="space-y-3">
            <p className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
              <Paperclip className="h-3.5 w-3.5" />
              {tt("builder.attachHint", lang)}
            </p>
            {data?.materials.length ? (
              <>
                <div className="relative">
                  <Search className="pointer-events-none absolute start-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={materialQuery}
                    onChange={(e) => setMaterialQuery(e.target.value)}
                    placeholder={lang === "ar" ? `ابحث في ${data.materials.length} مادة…` : `Search ${data.materials.length} materials…`}
                    className="h-8 ps-9 text-[13px]"
                    aria-label={lang === "ar" ? "ابحث في المواد للإرفاق" : "Search materials to attach"}
                  />
                </div>
                {materialResults.length === 0 && (
                  <p className="rounded-lg border border-dashed px-3 py-4 text-center text-[12.5px] text-muted-foreground">
                    {lang === "ar" ? `لا مواد تطابق «${materialQuery}».` : `No materials match “${materialQuery}”.`}
                  </p>
                )}
                <div className="space-y-1.5">
                  {materialResults.map((m) => {
                    const checked = attachments.includes(m.id)
                    return (
                      <label
                        key={m.id}
                        className={cn(
                          "flex cursor-pointer items-center gap-3 rounded-lg border px-3.5 py-2.5 transition-colors",
                          checked ? "border-primary/40 bg-primary/[0.04]" : "hover:bg-secondary/40"
                        )}
                      >
                        <Checkbox checked={checked} onCheckedChange={(v) => toggleAttachment(m.id, v === true)} />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[13.5px] font-medium">{m.title}</span>
                          <span className="block text-[11.5px] text-muted-foreground">
                            {m.category} · {formatBytes(m.sizeBytes)}
                          </span>
                        </span>
                      </label>
                    )
                  })}
                </div>
              </>
            ) : (
              <p className="rounded-xl border border-dashed px-4 py-8 text-center text-[13px] text-muted-foreground">
                {lang === "ar"
                  ? "المكتبة فارغة — ارفع ملفات من صفحة المكتبة أولًا."
                  : "The library is empty — upload files from the Library page first."}
              </p>
            )}
          </div>
        )}

        <DialogFooter className="border-t border-border pt-4">
          <Button variant="ghost" onClick={onClose} className="h-9">
            {tt("builder.cancel", lang)}
          </Button>
          <Button onClick={() => void submit()} disabled={busy} className="h-9">
            {busy ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : <Save className="me-1.5 h-4 w-4" />}
            {tt("builder.saveLesson", lang)} {isQuiz ? (lang === "ar" ? "الاختبار" : "quiz") : ""}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
