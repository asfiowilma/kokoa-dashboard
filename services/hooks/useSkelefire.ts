import { toast } from 'react-hot-toast'
import { markAsRead, markSelectedAsRead } from '@api/skelefire'
import { create } from 'zustand'

export const useSkelefire = create<SkelefireState>()((set, get) => ({
  courses: [],
  activities: [],
  isActive: false,
  togglePower: (to: boolean) => set({ isActive: !get().isActive }),
  setCourses: (to) => set({ courses: to }),
  setActivities: (to) => set({ activities: to }),
  countUnreadActivities: () =>
    set({
      courses: get().courses.map((course) => ({
        ...course,
        unread: get().activities.filter(
          (activity) => activity.course === course.courseID
        ).length,
      })),
    }),
  markAsRead: (activities: number[]) => {
    if (activities.length == 1) {
      markAsRead(activities[0])
    } else {
      markSelectedAsRead(activities)
    }
    toast.success(`${activities.length} activity(s) marked as read!`)
    set({
      activities: get().activities.filter(
        (activity) => !activities.includes(activity.moduleID)
      ),
    })
  },
}))
