"use client"

import { useState } from "react"
import { useAppStore, CourseInput } from "@/store/useAppStore"
import {
  COURSE_ACCENTS,
  COURSE_CATEGORIES,
  COURSE_LEVELS,
  Lesson,
} from "@/lib/audit-types"
import { accentOf, courseLessons, COURSE_ICONS } from "./shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { LessonEditor } from "./lesson-editor"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { tt } from "@/lib/i18n"
import {
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  ChevronLeft,
  Eye,
  FileQuestion,
  Loader2,
  Pencil,
  Plus,
  Save,
  Trash2,
} from "lucide-react"

const ICON_KEYS = Object.keys(COURSE_ICONS)
const ACCENT_SWATCH: Record<string, string> = {
  terracotta: "#c9633f",
  olive: "#8c8f6b",
  sage: "#759a87",
  plum: "#9c7a8f",
  sand: "#c2a878",
  clay: "#a98467",
}

export function CourseBuilder() {
  const data = useAppStore((s) => s.data)
  const courseId = useAppStore((s) => s.selectedCourseId)
  const navigate = useAppStore((s) => s.navigate)
  const saveCourse = useAppStore((s) => s.saveCourse)
  const saveModule = useAppStore((s) => s.saveModule)
  const deleteModule = useAppStore((s) => s.deleteModule)
  const deleteLesson = useAppStore((s) => s.deleteLesson)
  const reorderModule = useAppStore((s) => s.reorderModule)
  const reorderLesson = useAppStore((s) => s.reorderLesson)
  const saveLesson = useAppStore((s) => s.saveLesson)
  const lang = useAppStore((s) => s.lang)

  const course = data?.courses.find((c) => c.id === courseId)

  const [form, setForm] = useState<CourseInput | null>(() =>
    course
      ? {
          code: course.code,
          title: course.title,
          subtitle: course.subtitle,
          description: course.description,
          category: course.category,
          level: course.level,
          cpeHours: course.cpeHours,
          instructorName: course.instructorName,
          instructorTitle: course.instructorTitle,
          instructorBio: course.instructorBio,
          icon: course.icon,
          accent: course.accent,
          published: course.published,
        }
      : null
  )
  const [saving, setSaving] = useState(false)
  const [newModuleTitle, setNewModuleTitle] = useState("")
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null)
  const [editModuleTitle, setEditModuleTitle] = useState("")
  const [editModuleDesc, setEditModuleDesc] = useState("")
  const [editLessonId, setEditLessonId] = useState<string | null>(null)

  if (!data || !isAdmin(data)) return null
  if (!course || !form) {
    return (
      <div className="py-16 text-center text-sm text-muted-foreground">
        {tt("builder.notFound", lang)}{" "}
        <button className="text-primary underline" onClick={() => navigate("studio")}>
          {tt("builder.backToStudio", lang)}
        </button>
      </div>
    )
  }

  const set = <K extends keyof CourseInput>(k: K, v: CourseInput[K]) =>
    setForm((f) => (f ? { ...f, [k]: v } : f))

  const persist = async (extra?: Partial<CourseInput>) => {
    setSaving(true)
    const merged = { ...form, ...extra }
    const id = await saveCourse(merged, course.id)
    setSaving(false)
    if (id) toast.success(tt("builder.savedToast", lang))
  }

  const addModule = async () => {
    const t = newModuleTitle.trim()
    if (!t) return
    const err = await saveModule(course.id, t, "")
    if (err) {
      toast.error(err)
      return
    }
    setNewModuleTitle("")
    toast.success(tt("builder.moduleAdded", lang), { description: t })
  }

  const renameModule = async (id: string) => {
    if (!editModuleTitle.trim()) return
    const m = course.modules.find((x) => x.id === id)
    const err = await saveModule(course.id, editModuleTitle.trim(), editModuleDesc || m?.description || "", id)
    if (err) {
      toast.error(err)
      return
    }
    setEditingModuleId(null)
    toast.success(tt("builder.moduleUpdated", lang))
  }

  const quickAddLesson = async (moduleId: string, type: "lesson" | "quiz") => {
    const n = (course.modules.find((m) => m.id === moduleId)?.lessons.length ?? 0) + 1
    const L = lang === "ar"
    const err = await saveLesson(
      moduleId,
      {
        title: type === "quiz" ? (L ? `اختبار ${n}` : `Knowledge check ${n}`) : (L ? `درس جديد ${n}` : `New lesson ${n}`),
        type,
        durationMin: 12,
        xp: 10,
        content: { intro: "", sections: [], keyPoints: [], takeaway: "" },
        attachments: [],
        quiz:
          type === "quiz"
            ? {
                title: L ? `اختبار ${n}` : `Knowledge check ${n}`,
                passScore: 70,
                questions: [
                  { question: "", options: ["", "", "", ""], correctIndex: 0, explanation: "" },
                ],
              }
            : null,
      },
      undefined
    )
    if (err) {
      toast.error(err)
      return
    }
    toast.success(type === "quiz" ? tt("builder.quizAdded", lang) : tt("builder.lessonAdded", lang), {
      description: tt("builder.clickEdit", lang),
    })
  }

  const editingLesson = courseLessons(course).find((l) => l.id === editLessonId) ?? null
  const sortedModules = [...course.modules].sort((a, b) => a.order - b.order)
  const accent = accentOf(course.accent)

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => navigate("studio")}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring"
        >
          <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {tt("builder.studioWord", lang)}
        </button>
        <div className="flex items-center gap-2.5">
          <Button variant="outline" size="sm" className="h-8" onClick={() => navigate("course", { courseId: course.id })}>
            <Eye className="me-1.5 h-3.5 w-3.5" /> {tt("builder.preview", lang)}
          </Button>
          <div className="flex items-center gap-2 rounded-full border bg-card px-3 py-1.5">
            <Switch
              checked={course.published}
              onCheckedChange={(v) => void persist({ published: v })}
              className="scale-90"
              aria-label={tt("builder.publishCourse", lang)}
            />
            <span className="text-[12px] font-medium">
              {course.published ? tt("builder.published", lang) : tt("builder.draft", lang)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Badge variant="outline" className={cn("font-mono text-[10.5px]", accent.chip)}>
          {course.code}
        </Badge>
        <h1 dir="auto" className="mt-2.5 font-serif text-[26px] font-semibold leading-tight tracking-tight">
          {course.title}
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {course.modules.length} {tt("builder.modulesLessons", lang)} · {courseLessons(course).length} {tt("builder.lessonsWord", lang)} · {course.enrolledCount} {tt("builder.enrolledWord", lang)}
        </p>
      </div>

      {/* ---- course settings ---- */}
      <section className="mt-8 rounded-xl border bg-card p-6 shadow-soft" aria-label={tt("builder.detailsTitle", lang)}>
        <h2 className="font-serif text-[17px] font-semibold tracking-tight">{tt("builder.detailsTitle", lang)}</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.titleLabel", lang)}</Label>
            <Input value={form.title} onChange={(e) => set("title", e.target.value)} className="h-9" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.codeLabel", lang)}</Label>
            <Input value={form.code} onChange={(e) => set("code", e.target.value)} className="h-9 font-mono" />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-[13px]">{tt("builder.subtitleLabel", lang)}</Label>
            <Input
              value={form.subtitle}
              onChange={(e) => set("subtitle", e.target.value)}
              placeholder={tt("builder.subtitlePh", lang)}
              className="h-9"
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-[13px]">{tt("builder.descLabel", lang)}</Label>
            <Textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder={tt("builder.descPh", lang)}
              className="min-h-[90px]"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.categoryLabel", lang)}</Label>
            <Select value={form.category} onValueChange={(v) => set("category", v)}>
              <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
              <SelectContent>
                {[...COURSE_CATEGORIES, course.category]
                  .filter((v, i, a) => a.indexOf(v) === i)
                  .map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.levelLabel", lang)}</Label>
            <Select value={form.level} onValueChange={(v) => set("level", v)}>
              <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
              <SelectContent>
                {COURSE_LEVELS.map((l) => (
                  <SelectItem key={l} value={l}>{l}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.cpeLabel", lang)}</Label>
            <Input
              type="number"
              min={0.5}
              step={0.5}
              value={form.cpeHours}
              onChange={(e) => set("cpeHours", Number(e.target.value))}
              className="h-9"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.instructorLabel", lang)}</Label>
            <Input value={form.instructorName} onChange={(e) => set("instructorName", e.target.value)} className="h-9" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.instructorTitle", lang)}</Label>
            <Input value={form.instructorTitle} onChange={(e) => set("instructorTitle", e.target.value)} className="h-9" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.instructorBio", lang)}</Label>
            <Input value={form.instructorBio} onChange={(e) => set("instructorBio", e.target.value)} className="h-9" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.iconLabel", lang)}</Label>
            <div className="flex flex-wrap gap-1.5">
              {ICON_KEYS.map((k) => {
                const Icon = COURSE_ICONS[k]
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => set("icon", k)}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors focus-ring",
                      form.icon === k
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    )}
                    aria-label={`Icon ${k}`}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                )
              })}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("builder.accentLabel", lang)}</Label>
            <div className="flex flex-wrap gap-2">
              {COURSE_ACCENTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => set("accent", a)}
                  className={cn(
                    "h-7 w-7 rounded-full border-2 transition-transform focus-ring",
                    form.accent === a ? "scale-110 border-foreground" : "border-transparent hover:scale-105"
                  )}
                  style={{ background: ACCENT_SWATCH[a] ?? "#c9633f" }}
                  aria-label={`Accent ${a}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-end border-t border-border pt-4">
          <Button onClick={() => void persist()} disabled={saving} className="h-9">
            {saving ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : <Save className="me-1.5 h-4 w-4" />}
            {tt("builder.saveDetails", lang)}
          </Button>
        </div>
      </section>

      {/* ---- curriculum ---- */}
      <section className="mt-8" aria-label={tt("builder.curriculum", lang)}>
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-[17px] font-semibold tracking-tight">{tt("builder.curriculum", lang)}</h2>
        </div>

        <div className="mt-4 space-y-4">
          {sortedModules.map((m, mi) => (
            <div key={m.id} className="rounded-xl border bg-card shadow-soft">
              {/* module header */}
              <div className="flex flex-wrap items-center gap-2 border-b bg-secondary/30 px-4 py-3">
                {editingModuleId === m.id ? (
                  <div className="flex w-full flex-wrap items-center gap-2">
                    <Input
                      value={editModuleTitle}
                      onChange={(e) => setEditModuleTitle(e.target.value)}
                      className="h-8 max-w-xs"
                      autoFocus
                    />
                    <Input
                      value={editModuleDesc}
                      onChange={(e) => setEditModuleDesc(e.target.value)}
                      placeholder={tt("builder.modulePh", lang)}
                      className="h-8 min-w-[160px] flex-1"
                    />
                    <div className="ms-auto flex gap-1.5">
                      <Button size="sm" className="h-8" onClick={() => void renameModule(m.id)}>{tt("builder.save", lang)}</Button>
                      <Button size="sm" variant="ghost" className="h-8" onClick={() => setEditingModuleId(null)}>
                        {tt("builder.cancel", lang)}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {String(mi + 1).padStart(2, "0")}
                    </span>
                    <span dir="auto" className="text-[14px] font-semibold">{m.title}</span>
                    <span className="text-[11.5px] text-muted-foreground">{m.lessons.length} {tt("builder.lessonsCount", lang)}</span>
                    <div className="ms-auto flex items-center gap-0.5">
                      <IconBtn label={tt("builder.moveUp", lang)} disabled={mi === 0} onClick={() => void reorderModule(course.id, m.id, "up")}>
                        <ArrowUp className="h-3.5 w-3.5" />
                      </IconBtn>
                      <IconBtn
                        label={tt("builder.moveDown", lang)}
                        disabled={mi === sortedModules.length - 1}
                        onClick={() => void reorderModule(course.id, m.id, "down")}
                      >
                        <ArrowDown className="h-3.5 w-3.5" />
                      </IconBtn>
                      <IconBtn label={tt("builder.renameModule", lang)} onClick={() => { setEditingModuleId(m.id); setEditModuleTitle(m.title); setEditModuleDesc(m.description) }}>
                        <Pencil className="h-3.5 w-3.5" />
                      </IconBtn>
                      <IconBtn
                        label={tt("builder.deleteModule", lang)}
                        danger
                        onClick={() =>
                          void deleteModule(m.id).then((err) => {
                            if (err) toast.error(err)
                            else toast.success(tt("builder.moduleDeleted", lang))
                          })
                        }
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </IconBtn>
                    </div>
                  </>
                )}
              </div>

              {/* lessons */}
              <div className="divide-y divide-border">
                {[...m.lessons].sort((a, b) => a.order - b.order).map((l, li) => (
                  <div key={l.id} className="flex items-center gap-2.5 px-4 py-2.5">
                    {l.type === "quiz" ? (
                      <FileQuestion className="h-4 w-4 shrink-0 text-gold-deep" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                    )}
                    <span dir="auto" className="min-w-0 flex-1 truncate text-[13.5px] font-medium">{l.title}</span>
                    <span className="hidden shrink-0 text-[11.5px] text-muted-foreground sm:inline">
                      {l.type === "quiz" ? tt("builder.quizWord", lang) : `${l.durationMin} ${tt("builder.minWord", lang)}`} · {l.xp} XP
                      {l.attachments.length ? ` · ${l.attachments.length} ${tt("builder.filesWord", lang)}` : ""}
                    </span>
                    <div className="flex shrink-0 items-center gap-0.5">
                      <IconBtn label={tt("builder.moveUp", lang)} disabled={li === 0} onClick={() => void reorderLesson(m.id, l.id, "up")}>
                        <ArrowUp className="h-3.5 w-3.5" />
                      </IconBtn>
                      <IconBtn
                        label={tt("builder.moveDown", lang)}
                        disabled={li === m.lessons.length - 1}
                        onClick={() => void reorderLesson(m.id, l.id, "down")}
                      >
                        <ArrowDown className="h-3.5 w-3.5" />
                      </IconBtn>
                      <IconBtn label={tt("builder.editLesson", lang)} onClick={() => setEditLessonId(l.id)}>
                        <Pencil className="h-3.5 w-3.5" />
                      </IconBtn>
                      <IconBtn
                        label={tt("builder.deleteLesson", lang)}
                        danger
                        onClick={() =>
                          void deleteLesson(l.id).then((err) => {
                            if (err) toast.error(err)
                            else toast.success(tt("builder.lessonDeleted", lang))
                          })
                        }
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </IconBtn>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-2 px-4 py-3">
                  <Button size="sm" variant="outline" className="h-8" onClick={() => void quickAddLesson(m.id, "lesson")}>
                    <Plus className="me-1 h-3.5 w-3.5" /> {tt("builder.addLesson", lang)}
                  </Button>
                  <Button size="sm" variant="outline" className="h-8" onClick={() => void quickAddLesson(m.id, "quiz")}>
                    <Plus className="me-1 h-3.5 w-3.5" /> {tt("builder.addQuiz", lang)}
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* add module */}
          <div className="flex items-center gap-2 rounded-xl border border-dashed px-4 py-3.5">
            <Input
              value={newModuleTitle}
              onChange={(e) => setNewModuleTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && void addModule()}
              placeholder={tt("builder.newModulePh", lang)}
              className="h-9"
            />
            <Button size="sm" className="h-9 shrink-0" onClick={() => void addModule()} disabled={!newModuleTitle.trim()}>
              <Plus className="me-1 h-4 w-4" /> {tt("builder.addModule", lang)}
            </Button>
          </div>
        </div>
      </section>

      {/* lesson editor dialog */}
      {editingLesson && (
        <LessonEditor
          key={editingLesson.id}
          lesson={editingLesson}
          onClose={() => setEditLessonId(null)}
          onSave={async (input) => {
            const err = await saveLesson(editingLesson.moduleId, input, editingLesson.id)
            if (err) {
              toast.error(err)
              return false
            }
            toast.success(tt("builder.lessonSaved", lang), { description: input.title })
            return true
          }}
        />
      )}
    </div>
  )
}

function isAdmin(data: NonNullable<ReturnType<typeof useAppStore.getState>["data"]>) {
  return data.user.role === "admin"
}

function IconBtn({
  children,
  label,
  onClick,
  disabled,
  danger,
}: {
  children: React.ReactNode
  label: string
  onClick: () => void
  disabled?: boolean
  danger?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors focus-ring disabled:opacity-30",
        danger ? "hover:bg-destructive/10 hover:text-destructive" : "hover:bg-secondary hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}

export type { Lesson }
