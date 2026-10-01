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
  | "exam"
  | "review"
  | "simulation"
  | "podcast"

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
  /** v22: the actual engine that served the answer (workspace / kilo / llm7 / …) */
  engine?: string | null
  /** v22: the model's thinking process streamed before the answer (ephemeral,
   *  not persisted server-side — live streaming artifact) */
  reasoning?: string | null
  /** Informational engine notice (e.g. fallback to the free model) */
  notice?: string | null
}

export type AiConversationSummary = {
  id: string
  title: string
  /** v21: pinned conversations float to the top of the tutor rail. */
  pinned?: boolean
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
  /** Arabic rendition (P1-6) — optional per question. */
  questionAr?: string
  optionsAr?: string[]
  explanationAr?: string
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
  /** Arabic rendition (P1-6) — parsed JSON or "" when unavailable. */
  contentAr: string
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
  /** true = curated external import used as a supplement (P1-6). */
  supplementary: boolean
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
  /** Count of review cards due now (P0-3) — powers the nav badge. */
  reviewDue: number
  /** Last opened lesson id (resume card, quick win). */
  lastLessonId: string | null
  /** v20.1 — engagement stats that feed the achievement badges. */
  simCompleted: number
  simBest: number
  examCount: number
  examBest: number
  reviewTotal: number
  reviewGraded: number
  practiceAnswered: number
}

/* ================================================================== */
/* v20 — exam-readiness client types (P0-1 / P0-3 / P1-4 / P1-5)       */
/* ================================================================== */

/** A bank question as delivered to the client — the answer key never ships. */
export type BankQuestionClient = {
  id: string
  code: string
  stem: string
  stemAr: string | null
  options: string[]
  optionsAr: string[] | null
  standardTag: string
  area: string
  difficulty: number
}

export type BankStats = {
  total: number
  byArea: Record<string, number>
  byDifficulty: Record<string, number>
  withArabic: number
  tags: { tag: string; area: string; count: number }[]
}

export type ExamSessionClient = {
  id: string
  mode: string
  durationMin: number
  total: number
  startedAt: string
  completedAt: string | null
  score: number | null
  correct: number | null
  sectionScores: Record<string, { correct: number; total: number }>
  /** v21: submitted after the server-side deadline */
  timedOut?: boolean
  /** v27 — real-exam sections (testlets / Section A-B / sessions) */
  sections?: SessionSectionClient[]
  /** v27 — CR answers so far: {crTaskId: [reqAnswer,…]} */
  written?: Record<string, string[]>
  /** v27 — AI examiner awards (after marking): {crTaskId: [{awarded, feedback}]} */
  crMarks?: Record<string, { awarded: number; feedback: string }[]>
  /** v27 — pending | done */
  crStatus?: "pending" | "done"
  /** v27 — CR task payloads (certified solutions only after completion) */
  crTasks?: CrTaskClient[]
  questions: BankQuestionClient[]
  /** answered picks so far: {questionId: picked} */
  answered: Record<string, number>
  flagged: string[]
  blueprint: { area: string; count: number; picked: number }[]
}

export type SessionSectionClient = {
  id: string
  kind: "mcq" | "cr"
  titleEn: string
  titleAr: string
  noteEn: string
  noteAr: string
  weight: number
  mcqIds?: string[]
  crTaskIds?: string[]
}

export type CrTaskClient = {
  id: string
  family: string
  labelEn: string
  labelAr: string
  exhibitEn: string
  exhibitAr: string
  totalMarks: number
  requirements: {
    promptEn: string
    promptAr: string
    kind: "numeric" | "text"
    marks: number
    certifiedEn?: string
    certifiedAr?: string
    numeric?: { value: number; tolerance: number; unit?: string }
  }[]
}

export type ExamSummaryRow = {
  id: string
  mode: string
  total: number
  correct: number | null
  score: number | null
  startedAt: string
  completedAt: string | null
  timedOut?: boolean
}

export type ReviewCardClient = {
  id: string
  kind: string
  refId: string
  title: string
  front: string
  back: string
  frontAr: string | null
  backAr: string | null
  dueAt: string
  intervalDays: number
  ease: number
  reps: number
  lapses: number
}

export type ReviewStats = {
  due: number
  total: number
  todayNew: number
  streakOfReviews: number
}

export type TagMasteryClient = {
  tag: string
  area: string
  attempts: number
  mastery: number
  accuracy: number
  confidence: number
}

export type AreaReadinessClient = {
  area: string
  bankSize: number
  attempted: number
  coverage: number
  accuracy: number
  readiness: number
}

export type AnalyticsPayload = {
  tags: TagMasteryClient[]
  readiness: AreaReadinessClient[]
  examHistory: ExamSummaryRow[]
  practiceAccuracy: { correct: number; total: number }
  simRuns: { id: string; scenario: string; score: number; completedAt: string | null }[]
  cpeHours: number
}

export type StudyPlanItem = { label: string; done: boolean }
export type StudyPlanWeek = { focus: string; items: StudyPlanItem[] }
export type StudyPlanClient = {
  id: string
  title: string
  goal: string
  horizonWeeks: number
  weeks: StudyPlanWeek[]
  progress: number
  createdAt: string
}

export type SimOptionClient = { id: string; label: string }
export type SimDecisionClient = {
  id: string
  prompt: string
  context?: string
  options?: SimOptionClient[]
  freeText?: boolean
}
export type SimStageClient = {
  id: string
  title: string
  brief: string
  docs: { label: string; body: string }[]
  decisions: SimDecisionClient[]
}
export type SimScenarioClient = {
  slug: string
  title: string
  company: string
  sector: string
  summary: string
  stages: SimStageClient[]
  maxScore: number
}
export type SimRunClient = {
  id: string
  scenario: string
  status: string
  stage: number
  decisions: {
    stageId: string
    decisionId: string
    picked?: string
    text?: string
    judged?: boolean
    score?: number
    feedback?: string
  }[]
  score: number
  startedAt: string
  completedAt: string | null
}

export type LessonNoteClient = {
  id: string
  lessonId: string
  kind: "note" | "highlight"
  text: string
  quote: string
  color: string
  createdAt: string
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
