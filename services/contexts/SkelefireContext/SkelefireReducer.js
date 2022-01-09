import { markAsRead, markSelectedAsRead } from '@api/skelefire'
import { toast } from 'react-hot-toast'

export default function SkelefireReducer(state, action) {
  const { activities, courses, isActive } = state

  switch (action.type) {
    case 'TOGGLE_POWER':
      return { ...state, isActive: !isActive }
    case 'SET_COURSES':
      return { ...state, courses: action.payload }
    case 'SET_ACTIVITIES':
      return { ...state, activities: action.payload }
    case 'COUNT_UNREAD_ACTIVITIES':
      return {
        ...state,
        courses: courses.map((course) => ({
          ...course,
          unread: activities.filter(
            (activity) => activity.course === course.courseID
          ).length,
        })),
      }
    case 'MARK_READ':
      if (action.payload.length == 1) {
        markAsRead(action.payload[0])
      } else {
        markSelectedAsRead(action.payload)
      }
      toast.success(`${action.payload.length} activity(s) marked as read!`)
      return {
        ...state,
        activities: activities.filter(
          (activity) => !action.payload.includes(activity.moduleID)
        ),
      }
    default:
      return state
  }
}
