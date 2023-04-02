interface StrawberryState {
  courseData: StrawberryCourse[]
  activeCourse: number
  isWorking: boolean
  setCourseData: (to: StrawberryCourse[]) => void
  addCourseData: (newCourse: StrawberryCourse) => void
  removeCourseData: (toRemove: number) => void
  setActiveCourse: (to: number) => void
  setIsWorking: (to: boolean) => void
}

interface StrawberryCourse {
  id: number
  sceleId: number
  name: string
}
