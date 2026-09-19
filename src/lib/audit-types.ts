export type ViewName =
  | "home"
  | "courses"
  | "course"
  | "lesson"
  | "quiz"
  | "library"
  | "program"
  | "sectors"
  | "team"
  | "achievements"
  | "certificate"
  | "studio"
  | "studio-course"
  | "discover"
  | "ai"

export type AiSource = {
  url: string
  name: string
  snippet: string
  host_name: string
}

export type AiChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
  sources: AiSource[]
  /** Small thumbnail data-URL when the learner attached an image (user messages) */
  imageUrl?: string | null
  /** Which engine model answered (assistant messages, when known) */
  modelUsed?: string | null
  /** Informational engine notice (e.g. fallback to the free model) */
  notice?: string | null
}

export type AiConversationSummary = {
  id: string
  title: string
  updatedAt: string
  messageCount: number
}

/** What the learner is looking at when they ask the AI tutor */
export type AiContext = {
  view: ViewName
  courseId?: string
  lessonId?: string
}

export type LessonContent = {
  intro: string
  sections: { heading: string; body: string; bullets?: string[] }[]
  keyPoints: string[]
  example?: { title: string; context: string; analysis: string }
  takeaway: string
}

export type QuizQuestion = {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type Quiz = {
  id: string
  lessonId: string
  courseId: string
  title: string
  passScore: number
  questions: QuizQuestion[]
}

export type Lesson = {
  id: string
  moduleId: string
  title: string
  type: "lesson" | "quiz"
  durationMin: number
  xp: number
  content: LessonContent
  attachments: string[] // material ids
  videoUrl: string // optional YouTube link
  externalUrl: string // optional external link (MOOC platform lesson)
  order: number
  quiz?: Quiz | null
}

export type Module = {
  id: string
  courseId: string
  title: string
  description: string
  order: number
  lessons: Lesson[]
}

export type Course = {
  id: string
  slug: string
  code: string
  title: string
  subtitle: string
  description: string
  category: string
  level: string
  cpeHours: number
  instructorName: string
  instructorTitle: string
  instructorBio: string
  rating: number
  ratingCount: number
  icon: string
  accent: string
  featured: boolean
  published: boolean
  order: number
  sourcePlatform: string // youtube | coursera | edx | mit-ocw | openstax | "" (in-house)
  sourceUrl: string // original URL when imported from a free external source
  enrolledCount: number
  modules: Module[]
}

export type MaterialCategory =
  | "Reference"
  | "Standards"
  | "Egyptian Standards"
  | "IFRS"
  | "Templates"
  | "Working Papers"
  | "Policies"

export type Material = {
  id: string
  title: string
  description: string
  category: string
  fileName: string
  originalName: string
  mimeType: string
  sizeBytes: number
  sourceUrl: string // official source link for ingested standards ("" for uploads)
  hasFile: boolean // false = DB-only record pointing at an external source
  uploadedById: string | null
  uploaderName: string | null
  createdAt: string
}

export type CurrentUser = {
  id: string
  name: string
  email: string
  role: "learner" | "admin"
  jobTitle: string
  initials: string
  xp: number
  streakDays: number
}

export type DirectoryUser = {
  id: string
  name: string
  email: string
  role: "learner" | "admin"
  jobTitle: string
  initials: string
  xp: number
  streakDays: number
}

export type TeamMember = {
  id: string
  name: string
  email: string
  role: "learner" | "admin"
  jobTitle: string
  initials: string
  xp: number
  streakDays: number
  lastActiveAt: string
  lessonsDone: number
  certificatesCount: number
  enrollments: { courseId: string; courseTitle: string; code: string; pct: number }[]
  certificates: { id: string; courseTitle: string; code: string; serial: string; issuedAt: string }[]
}

export type Enrollment = {
  id: string
  courseId: string
  startedAt: string
  completedAt: string | null
}

export type QuizAttempt = {
  id: string
  quizId: string
  score: number
  correct: number
  total: number
  passed: boolean
  createdAt: string
}

export type CertificateInfo = {
  id: string
  courseId: string
  serial: string
  issuedAt: string
}

export type BootstrapData = {
  user: CurrentUser
  users: DirectoryUser[]
  courses: Course[]
  materials: Material[]
  enrollments: Enrollment[]
  completedLessonIds: string[]
  quizAttempts: QuizAttempt[]
  certificates: CertificateInfo[]
}

export const LEVELS = [
  { name: "Trainee", min: 0 },
  { name: "Associate", min: 100 },
  { name: "Senior", min: 300 },
  { name: "Manager", min: 600 },
  { name: "Partner", min: 1000 },
]

export function levelForXp(xp: number) {
  let current = LEVELS[0]
  for (const l of LEVELS) if (xp >= l.min) current = l
  const next = LEVELS.find((l) => l.min > xp)
  return { current, next }
}

export type BadgeDef = {
  id: string
  name: string
  description: string
  icon: string
  earned: boolean
}

export const MATERIAL_CATEGORIES: MaterialCategory[] = [
  "Reference",
  "Standards",
  "Egyptian Standards",
  "IFRS",
  "Templates",
  "Working Papers",
  "Policies",
]

export const COURSE_CATEGORIES = [
  "International Standards",
  "Egyptian Framework",
  "IFRS",
  "Analytics",
  "Internal Training",
  "Arabic Academy",
  "Open Courses",
]

export const COURSE_LEVELS = ["Foundation", "Intermediate", "Advanced"]

export const COURSE_ACCENTS = [
  "terracotta",
  "olive",
  "sage",
  "plum",
  "sand",
  "clay",
]

export function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("")
}

export function formatBytes(bytes: number) {
  if (!bytes) return "0 B"
  const k = 1024
  const sizes = ["B", "KB", "MB", "GB"]
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), 3)
  return `${(bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 1)} ${sizes[i]}`
}
