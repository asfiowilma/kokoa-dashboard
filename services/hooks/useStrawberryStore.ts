import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStrawberryStore = create<StrawberryState>()(
  persist(
    (set, get) => ({
      courseData: [],
      activeCourse: 0,
      isWorking: true,
      setCourseData: (to) => set({ courseData: to }),
      addCourseData: (newCourse) =>
        set({ ...get(), courseData: [...get().courseData, newCourse] }),
      removeCourseData: (toRemove) =>
        set({
          courseData: get().courseData.filter(
            (course) => course.id != toRemove
          ),
        }),
      setActiveCourse: (to) => set({ activeCourse: to }),
      setIsWorking: (to) => set({ isWorking: to }),
    }),
    {
      name: 'strawberry-storage',
    }
  )
)

export default useStrawberryStore
