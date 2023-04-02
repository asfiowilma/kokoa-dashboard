import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BiscottiStore {
  specializations: BiscottiSpecialization[]
  setSpecializations: (to: BiscottiSpecialization[]) => void

  courses: BiscottiCourse[]
  setCourses: (to: BiscottiCourse[]) => void

  modules: BiscottiModule[]
  setModules: (to: BiscottiModule[]) => void

  activeSpecialization: BiscottiSpecialization
  setActiveSpecialization: (to: BiscottiSpecialization) => void

  activeCourse: BiscottiCourse
  setActiveCourse: (to: BiscottiCourse) => void

  stats: TaskStats
  setStats: (to: TaskStats) => void

  addTask: (newTask: BiscottiTask, moduleId: number) => void
  toggleCompleteTask: (taskId: number, moduleId: number, to: boolean) => void
}

export const useBiscotti = create<BiscottiStore>()(
  persist(
    (set, get) => ({
      specializations: [],
      courses: [],
      modules: [],
      activeSpecialization: null,
      activeCourse: null,
      stats: null,
      setActiveSpecialization: (to) => set({ activeSpecialization: to }),
      setActiveCourse: (to) => set({ activeCourse: to }),
      setSpecializations: (to) => set({ specializations: to }),
      setCourses: (to) => set({ courses: to }),
      setModules: (to) => set({ modules: to }),
      setStats: (to) => set({ stats: to }),
      addTask: (newTask, moduleId) => {
        const updatedModule = get().modules.find((m) => m.id == moduleId)
        updatedModule.tasks = [...updatedModule.tasks, newTask]
        set({
          stats: {
            ...get().stats,
            total: get().stats.total + 1,
            incomplete: get().stats.incomplete + 1,
          },
          modules: get().modules.map((m) =>
            m.id == moduleId ? updatedModule : m
          ),
        })
      },
      toggleCompleteTask: (taskId, moduleId, to) => {
        const updatedModule = get().modules.find((m) => m.id == moduleId)
        updatedModule.tasks = updatedModule.tasks.map<BiscottiTask>((t) =>
          t.id == taskId ? { ...t, is_completed: to } : t
        )
        set({
          stats: {
            ...get().stats,
            completed: get().stats.completed + (to ? 1 : -1),
            incomplete: get().stats.incomplete + (to ? -1 : 1),
          },
          modules: get().modules.map((m) =>
            m.id == moduleId ? updatedModule : m
          ),
        })
      },
    }),
    {
      name: 'biscotti-storage', // name of the item in the storage (must be unique)
    }
  )
)
