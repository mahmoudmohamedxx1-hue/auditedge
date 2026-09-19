"use client"

import { useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import {
  accentOf,
  courseLessons,
  COURSE_ICONS,
  PageHeader,
} from "./shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { tt } from "@/lib/i18n"
import { BookOpenCheck, ChevronRight, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react"

export function Studio() {
  const data = useAppStore((s) => s.data)
  const navigate = useAppStore((s) => s.navigate)
  const deleteCourse = useAppStore((s) => s.deleteCourse)
  const saveCourse = useAppStore((s) => s.saveCourse)
  const lang = useAppStore((s) => s.lang)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  if (!data) return null
  const isAdmin = data.user.role === "admin"

  if (!isAdmin) {
    return (
      <div className="rounded-xl border border-dashed py-16 text-center">
        <h1 className="font-serif text-[20px] font-semibold">{tt("studio.adminOnly", lang)}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{tt("studio.adminOnlySub", lang)}</p>
        <Button className="mt-6" onClick={() => navigate("courses")}>
          {tt("studio.browseCourses", lang)}
        </Button>
      </div>
    )
  }

  const courses = [...data.courses].sort((a, b) => a.order - b.order)

  const createCourse = async () => {
    const id = await saveCourse({
      code: `INT-${Date.now().toString(36).toUpperCase()}`,
      title: "Untitled course",
      subtitle: "",
      description: "",
      category: "Internal Training",
      level: "Foundation",
      cpeHours: 2,
      instructorName: data.user.name,
      instructorTitle: data.user.jobTitle,
      instructorBio: "",
      icon: "book-open-check",
      accent: "terracotta",
      published: false,
    })
    if (id) {
      toast.success(tt("studio.courseCreated", lang), { description: tt("studio.courseCreatedD", lang) })
      navigate("studio-course", { courseId: id })
    }
  }

  const remove = async (id: string) => {
    const err = await deleteCourse(id)
    setConfirmDelete(null)
    if (err) toast.error(err)
    else toast.success(tt("studio.courseDeleted", lang))
  }

  const togglePublish = async (courseId: string, published: boolean, title: string) => {
    const ok = await saveCourse(
      {
        // saveCourse PATCH requires full input; fetch current values
        ...(() => {
          const c = data.courses.find((x) => x.id === courseId)!
          return {
            code: c.code,
            title: c.title,
            subtitle: c.subtitle,
            description: c.description,
            category: c.category,
            level: c.level,
            cpeHours: c.cpeHours,
            instructorName: c.instructorName,
            instructorTitle: c.instructorTitle,
            instructorBio: c.instructorBio,
            icon: c.icon,
            accent: c.accent,
          }
        })(),
        published: !published,
      },
      courseId
    )
    if (!ok) return // save failed — its error toast already showed
    toast.success(published ? tt("studio.unpublished", lang) : tt("studio.publishedToast", lang), {
      description: published
        ? `${title} ${tt("studio.hiddenToast", lang)}`
        : `${title} ${tt("studio.liveToast", lang)}`,
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={tt("studio.title", lang)}
        sub={tt("studio.subtitle", lang)}
        action={
          <Button onClick={() => void createCourse()} className="h-9">
            <Plus className="me-1 h-4 w-4" /> {tt("studio.newCourse", lang)}
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <button
          onClick={() => void createCourse()}
          className="flex min-h-[120px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-ring"
        >
          <Plus className="h-5 w-5" />
          <span className="text-[13.5px] font-medium">{tt("studio.createNew", lang)}</span>
        </button>

        {courses.map((c) => {
          const accent = accentOf(c.accent)
          const Icon = COURSE_ICONS[c.icon] ?? BookOpenCheck
          const lessons = courseLessons(c).length
          return (
            <div
              key={c.id}
              className="group flex flex-col rounded-xl border bg-card p-5 shadow-soft card-lift"
            >
              <div className="flex items-start justify-between gap-2">
                <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", accent.icon)}>
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="flex items-center gap-1.5">
                  {c.published ? (
                    <Badge variant="outline" className="border-sage/35 bg-sage/[0.07] text-[10px] text-sage-deep">
                      {tt("studio.published", lang)}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-dashed text-[10px] text-muted-foreground">
                      {tt("studio.draft", lang)}
                    </Badge>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary focus-ring"
                        aria-label={`${tt("studio.optionsFor", lang)} ${c.title}`}
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem onClick={() => void togglePublish(c.id, c.published, c.title)}>
                        {c.published ? tt("studio.unpublish", lang) : tt("studio.publishCourse", lang)}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("course", { courseId: c.id })}>
                        {tt("studio.previewLearner", lang)}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => setConfirmDelete(c.id)}
                        className="text-destructive focus:text-destructive"
                      >
                        <Trash2 className="me-1.5 h-3.5 w-3.5" /> {tt("studio.deleteCourse", lang)}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <Badge variant="outline" className={cn("font-mono text-[10px]", accent.chip)}>
                  {c.code}
                </Badge>
                <span className="text-[11px] text-muted-foreground">{c.category}</span>
              </div>
              <h3 dir="auto" className="mt-2 line-clamp-1 font-serif text-[16.5px] font-semibold">{c.title}</h3>
              <p className="mt-1 line-clamp-1 text-[12.5px] text-muted-foreground">
                {c.subtitle || tt("studio.noSubtitle", lang)}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-[11.5px] text-muted-foreground">
                  {c.modules.length} {tt("studio.modules", lang)} · {lessons} {tt("studio.lessons", lang)} · {c.enrolledCount} {tt("studio.enrolled", lang)}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8"
                  onClick={() => navigate("studio-course", { courseId: c.id })}
                >
                  <Pencil className="me-1 h-3 w-3" /> {tt("studio.edit", lang)}
                  <ChevronRight className="ms-0.5 h-3 w-3 rtl:rotate-180" />
                </Button>
              </div>
            </div>
          )
        })}
      </div>

      <AlertDialog open={!!confirmDelete} onOpenChange={(o) => (!o ? setConfirmDelete(null) : null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-serif">{tt("studio.deleteQ", lang)}</AlertDialogTitle>
            <AlertDialogDescription>{tt("studio.deleteDesc", lang)}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{tt("studio.cancel", lang)}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => confirmDelete && void remove(confirmDelete)}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {tt("studio.deletePermanent", lang)}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
