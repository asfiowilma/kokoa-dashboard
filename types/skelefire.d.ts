interface SkelefireState {
  courses: SkelefireCourse[]
  activities: SkelefireActivities[]
  isActive: boolean
  togglePower: (to: boolean) => void
  setCourses: (to: SkelefireCourse[]) => void
  setActivities: (to: SkelefireActivities[]) => void
  countUnreadActivities: () => void
  markAsRead: (activities: number[]) => void
}

interface SkelefireCourse {
  courseID: number
  shortname?: string
}

interface SkelefireActivities {
  course: number
  moduleID: number
  selected?: boolean
}

interface SkelefireAction {}
