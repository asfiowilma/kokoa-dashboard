import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStrawberryStore = create(
  persist(
    (set, get) => ({
      courseData: [],
      activeCourse: 0,
      setCourseData: (to) => set({ ...get(), courseData: to }),
      addCourseData: (newCourse) =>
        set({ ...get(), courseData: [...get().courseData, newCourse] }),
      removeCourseData: (toRemove) =>
        set({
          ...get(),
          courseData: get().courseData.filter(
            (course) => course.id != toRemove
          ),
        }),
      setActiveCourse: (to) => set({ ...get(), activeCourse: to }),
    }),
    {
      name: 'strawberry-storage',
    }
  )
)

export default useStrawberryStore
