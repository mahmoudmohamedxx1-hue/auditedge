export interface SeedQuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface SeedLessonContent {
  intro: string
  sections: {
    heading: string
    body: string
    bullets?: string[]
  }[]
  keyPoints: string[]
  example?: {
    title: string
    context: string
    analysis: string
  }
  takeaway: string
}

export interface SeedLesson {
  title: string
  type: "lesson" | "quiz"
  durationMin: number
  xp: number
  content: SeedLessonContent
  quiz?: {
    title: string
    passScore: number
    questions: SeedQuizQuestion[]
  }
}

export interface SeedModule {
  title: string
  description: string
  lessons: SeedLesson[]
}

export interface SeedCourse {
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
  studentsCount: number
  icon: string
  accent: string
  featured: boolean
  order: number
  modules: SeedModule[]
}
