"use client"

import { useEffect, useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { TeamMember } from "@/lib/audit-types"
import { tt, dateLocaleOf } from "@/lib/i18n"
import { PageHeader } from "./shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import {
  Award,
  CalendarDays,
  Download,
  FileSpreadsheet,
  GraduationCap,
  Loader2,
  Mail,
  Medal,
  Plus,
  ShieldCheck,
  Trash2,
  Trophy,
  UserRound,
  Users,
  Zap,
} from "lucide-react"

export function Team() {
  const data = useAppStore((s) => s.data)
  const saveMember = useAppStore((s) => s.saveMember)
  const deleteMember = useAppStore((s) => s.deleteMember)
  const lang = useAppStore((s) => s.lang)
  const [team, setTeam] = useState<TeamMember[] | null>(null)
  const [addOpen, setAddOpen] = useState(false)
  const [selected, setSelected] = useState<TeamMember | null>(null)
  const [removing, setRemoving] = useState<string | null>(null)

  const me = data?.user
  const isAdmin = me?.role === "admin"

  const load = () => {
    fetch("/api/team")
      .then((r) => r.json())
      .then((t) => setTeam(Array.isArray(t) ? t : []))
      .catch(() => setTeam([]))
  }

  useEffect(load, [])

  const totals = useMemo(() => {
    if (!team) return null
    return {
      members: team.length,
      xp: team.reduce((s, u) => s + u.xp, 0),
      certs: team.reduce((s, u) => s + u.certificatesCount, 0),
      active: team.filter((u) => u.streakDays > 0).length,
    }
  }, [team])

  if (!data) return null

  const remove = async (m: TeamMember) => {
    setRemoving(m.id)
    const err = await deleteMember(m.id)
    setRemoving(null)
    if (err) toast.error(err)
    else {
      toast.success(tt("team.memberRemoved", lang), {
        description: `${m.name} ${tt("team.noAccessToast", lang)}`,
      })
      setSelected(null)
      load()
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={tt("team.title", lang)}
        sub={tt("team.subtitle", lang)}
        action={
          isAdmin ? (
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                onClick={() => window.open("/api/team/export", "_blank")}
                className="h-9"
              >
                <FileSpreadsheet className="me-1 h-4 w-4" /> {tt("team.cpeReport", lang)}
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("/api/admin/backup", "_blank")}
                className="h-9"
              >
                <Download className="me-1 h-4 w-4" /> {tt("team.backup", lang)}
              </Button>
              <Button onClick={() => setAddOpen(true)} className="h-9">
                <Plus className="me-1 h-4 w-4" /> {tt("team.addMember", lang)}
              </Button>
            </div>
          ) : undefined
        }
      />

      {totals && (
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          <div className="rounded-xl border bg-card p-4 shadow-soft">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-medium uppercase tracking-wider">{tt("team.members", lang)}</span>
            </div>
            <div className="mt-2 font-serif text-[22px] font-semibold leading-none">{totals.members}</div>
          </div>
          <div className="rounded-xl border bg-card p-4 shadow-soft">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-medium uppercase tracking-wider">{tt("team.teamXp", lang)}</span>
            </div>
            <div className="mt-2 font-serif text-[22px] font-semibold leading-none">
              {totals.xp.toLocaleString()}
            </div>
          </div>
          <div className="rounded-xl border bg-card p-4 shadow-soft">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Award className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-medium uppercase tracking-wider">{tt("team.certificates", lang)}</span>
            </div>
            <div className="mt-2 font-serif text-[22px] font-semibold leading-none">{totals.certs}</div>
          </div>
          <div className="rounded-xl border bg-card p-4 shadow-soft">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Trophy className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-medium uppercase tracking-wider">{tt("team.onStreak", lang)}</span>
            </div>
            <div className="mt-2 font-serif text-[22px] font-semibold leading-none">{totals.active}</div>
          </div>
        </div>
      )}

      {/* solo-workspace guidance — the numbers above mean little with one member */}
      {team && team.length === 1 && (
        <div className="flex items-start gap-3 rounded-xl border border-dashed bg-card/50 p-4">
          <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {tt("team.soloHint", lang)}
          </p>
        </div>
      )}

      {!team ? (
        <div className="space-y-2.5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-[68px] animate-pulse rounded-xl bg-secondary/60" />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border bg-card shadow-soft">
          <div className="hidden grid-cols-[44px_minmax(0,1fr)_92px_72px_88px_92px_100px] items-center gap-3 border-b bg-secondary/40 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground lg:grid">
            <span className="text-center">#</span>
            <span>{tt("team.member", lang)}</span>
            <span>{tt("team.role", lang)}</span>
            <span className="text-end">{tt("team.xp", lang)}</span>
            <span className="text-end">{tt("team.lessons", lang)}</span>
            <span className="text-end">{tt("team.certs", lang)}</span>
            <span className="text-end">{tt("team.lastActive", lang)}</span>
          </div>
          <div className="divide-y divide-border">
            {team.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setSelected(m)}
                className="grid w-full grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3.5 text-start transition-colors hover:bg-secondary/40 focus-ring lg:grid-cols-[44px_minmax(0,1fr)_92px_72px_88px_92px_100px]"
              >
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold",
                    i === 0
                      ? "bg-primary/12 text-primary ring-1 ring-primary/25"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {i === 0 ? <Trophy className="h-3.5 w-3.5" /> : i + 1}
                </span>
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[12px] font-semibold text-primary ring-1 ring-primary/15">
                    {m.initials}
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="flex items-center gap-1.5">
                      <span className="truncate text-[14px] font-medium">{m.name}</span>
                      {m.id === me?.id && (
                        <Badge variant="outline" className="text-[9.5px] text-primary">
                          {tt("team.you", lang)}
                        </Badge>
                      )}
                    </span>
                    <span className="block truncate text-[12px] text-muted-foreground">{m.jobTitle}</span>
                    <span className="mt-1.5 flex items-center gap-2 lg:hidden">
                      <span className="text-[11px] text-muted-foreground">{m.xp} XP</span>
                      <span className="text-[11px] text-muted-foreground">· {m.certificatesCount} {tt("team.certsShort", lang)}</span>
                    </span>
                  </span>
                </span>
                <span className="hidden justify-self-start lg:block">
                  {m.role === "admin" ? (
                    <Badge variant="outline" className="gap-1 border-primary/30 bg-primary/[0.06] text-[10.5px] text-primary">
                      <ShieldCheck className="h-3 w-3" /> {tt("team.admin", lang)}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-[10.5px] font-normal text-muted-foreground">
                      {tt("team.learner", lang)}
                    </Badge>
                  )}
                </span>
                <span className="hidden text-end text-[13px] font-medium lg:block">{m.xp}</span>
                <span className="hidden text-end text-[13px] text-muted-foreground lg:block">
                  {m.lessonsDone}
                </span>
                <span className="hidden text-end text-[13px] text-muted-foreground lg:block">
                  {m.certificatesCount}
                </span>
                <span dir="ltr" className="hidden text-end text-[12px] text-muted-foreground lg:block">
                  {new Date(m.lastActiveAt).toLocaleDateString(dateLocaleOf(lang), {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
                <span className="justify-self-end text-muted-foreground lg:hidden">
                  <UserRound className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* add member dialog */}
      <AddMemberDialog open={addOpen} onClose={() => setAddOpen(false)} onDone={load} />

      {/* member detail sheet */}
      <Sheet open={!!selected} onOpenChange={(o) => (!o ? setSelected(null) : null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-[440px]">
          {selected && (
            <>
              <SheetHeader className="pb-0">
                <SheetTitle className="font-serif text-[20px]">{selected.name}</SheetTitle>
                <SheetDescription className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> {selected.email}
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-6 px-4 pb-8 pt-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-secondary/60 p-3 text-center">
                    <div className="font-serif text-[19px] font-semibold">{selected.xp}</div>
                    <div className="text-[10.5px] text-muted-foreground">XP</div>
                  </div>
                  <div className="rounded-lg bg-secondary/60 p-3 text-center">
                    <div className="font-serif text-[19px] font-semibold">{selected.lessonsDone}</div>
                    <div className="text-[10.5px] text-muted-foreground">{tt("team.lessons", lang)}</div>
                  </div>
                  <div className="rounded-lg bg-secondary/60 p-3 text-center">
                    <div className="font-serif text-[19px] font-semibold">{selected.certificatesCount}</div>
                    <div className="text-[10.5px] text-muted-foreground">{tt("team.certificates", lang)}</div>
                  </div>
                </div>

                <section>
                  <h3 className="flex items-center gap-1.5 text-[13px] font-semibold">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" /> {tt("team.courseProgress", lang)}
                  </h3>
                  <div className="mt-2.5 space-y-2">
                    {selected.enrollments.length ? (
                      selected.enrollments.map((e) => (
                        <div key={e.courseId} className="rounded-lg border px-3.5 py-2.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="min-w-0 truncate text-[13px] font-medium">
                              <span className="mr-1.5 font-mono text-[11px] text-muted-foreground">{e.code}</span>
                              {e.courseTitle}
                            </span>
                            <span className="shrink-0 text-[12px] font-semibold">{e.pct}%</span>
                          </div>
                          <Progress value={e.pct} className="mt-2 h-1" />
                        </div>
                      ))
                    ) : (
                      <p className="rounded-lg border border-dashed px-3.5 py-4 text-center text-[12.5px] text-muted-foreground">
                        {tt("team.noEnrollments", lang)}
                      </p>
                    )}
                  </div>
                </section>

                <section>
                  <h3 className="flex items-center gap-1.5 text-[13px] font-semibold">
                    <Medal className="h-4 w-4 text-muted-foreground" /> {tt("team.certificatesTitle", lang)}
                  </h3>
                  <div className="mt-2.5 space-y-2">
                    {selected.certificates.length ? (
                      selected.certificates.map((c) => (
                        <div
                          key={c.id}
                          className="flex items-center justify-between gap-2 rounded-lg border px-3.5 py-2.5"
                        >
                          <span className="min-w-0 truncate text-[13px] font-medium">{c.courseTitle}</span>
                          <span className="shrink-0 font-mono text-[10.5px] text-muted-foreground">{c.serial}</span>
                        </div>
                      ))
                    ) : (
                      <p className="rounded-lg border border-dashed px-3.5 py-4 text-center text-[12.5px] text-muted-foreground">
                        {tt("team.noCertificates", lang)}
                      </p>
                    )}
                  </div>
                </section>

                {isAdmin && selected.id !== me?.id && (
                  <section className="space-y-2.5 border-t border-border pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-muted-foreground">{tt("team.role", lang)}</span>
                      <Select
                        value={selected.role}
                        onValueChange={async (v) => {
                          const err = await saveMember(
                            {
                              name: selected.name,
                              email: selected.email,
                              jobTitle: selected.jobTitle,
                              role: v as "learner" | "admin",
                            },
                            selected.id
                          )
                          if (err) toast.error(err)
                          else {
                            toast.success(
                              `${selected.name} ${v === "admin" ? tt("team.nowAdmin", lang) : tt("team.nowLearner", lang)}`
                            )
                            load()
                            setSelected(null)
                          }
                        }}
                      >
                        <SelectTrigger className="h-8 w-[130px] text-[12.5px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="learner">{tt("team.learner", lang)}</SelectItem>
                          <SelectItem value="admin">{tt("team.admin", lang)}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-muted-foreground">{tt("team.access", lang)}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={removing === selected.id}
                        onClick={() => void remove(selected)}
                        className="h-8 border-destructive/40 text-destructive hover:bg-destructive/10"
                      >
                        {removing === selected.id ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Trash2 className="me-1 h-3.5 w-3.5" />
                        )}
                        {tt("team.remove", lang)}
                      </Button>
                    </div>
                  </section>
                )}

                <p className="flex items-center gap-1.5 text-[11.5px] text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {tt("team.lastActiveWord", lang)}{" "}
                  {new Date(selected.lastActiveAt).toLocaleDateString(dateLocaleOf(lang), {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}

function AddMemberDialog({
  open,
  onClose,
  onDone,
}: {
  open: boolean
  onClose: () => void
  onDone: () => void
}) {
  const saveMember = useAppStore((s) => s.saveMember)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [role, setRole] = useState("learner")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError(null)
    const err = await saveMember({
      name,
      email,
      jobTitle,
      role: role as "learner" | "admin",
    })
    setBusy(false)
    if (err) {
      setError(err)
      return
    }
    toast.success("Member added", {
      description: `${name} is now tracked on the Team page.`,
    })
    setName("")
    setEmail("")
    setJobTitle("")
    setRole("learner")
    onDone()
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={(o) => (!o ? onClose() : null)}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-[19px]">Add a team member</DialogTitle>
          <DialogDescription>
            Add a colleague's record to track their learning progress, XP and certificates on the Team page.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="m-name" className="text-[13px]">
              Full name
            </Label>
            <Input
              id="m-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Nourhan Sami"
              className="h-9"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="m-email" className="text-[13px]">
              Work email
            </Label>
            <Input
              id="m-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nourhan@yourfirm.com"
              className="h-9"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="m-title" className="text-[13px]">
                Role at office
              </Label>
              <Input
                id="m-title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Audit Senior"
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[13px]">Access</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="learner">Learner</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {error && <p className="text-[13px] text-destructive">{error}</p>}
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={onClose} className="h-9">
              Cancel
            </Button>
            <Button type="submit" disabled={busy} className="h-9">
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Add member"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
