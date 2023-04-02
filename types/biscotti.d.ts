interface TaskStats {
  completed: number
  incomplete: number
  total: number
}

interface BiscottiSpecialization {
  id: number
  name: string
  courses?: BiscottiCourse[]
  task_counts?: TaskStats
  course_count?: number
  is_completed?: boolean
}

interface BiscottiCourse {
  id: number
  name: string
  task_counts?: TaskStats
  module_count?: number
  is_completed?: boolean
}

interface BiscottiModule {
  id: number
  name: string
  task_counts?: TaskStats
  is_completed?: boolean
  tasks?: BiscottiTask[]
}

interface BiscottiTask {
  id: number
  name: string
  is_completed: boolean
}

interface BiscottiCreateTaskPayload {
  module: number
  name: string
}
