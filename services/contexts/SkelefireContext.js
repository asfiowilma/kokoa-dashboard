import React, { createContext, useReducer } from 'react'
import SkelefireReducer from './SkelefireReducer'

const INITIAL_STATE = {
  courses: [],
  activities: [],
  isActive: false,
}

const SkelefireContext = createContext(INITIAL_STATE)

const SkelefireProvider = ({ children }) => {
  const [skelefire, dispatch] = useReducer(SkelefireReducer, INITIAL_STATE)

  const togglePower = () => {
    dispatch({
      type: 'TOGGLE_POWER',
    })
  }

  const setCourses = (courses) => {
    dispatch({
      type: 'SET_COURSES',
      payload: courses,
    })
  }

  const setActivities = (activities) => {
    dispatch({
      type: 'SET_ACTIVITIES',
      payload: activities,
    })
  }

  const countUnreadActivities = () => {
    dispatch({
      type: 'COUNT_UNREAD_ACTIVITIES',
    })
  }

  const markAsRead = (moduleID) => {
    dispatch({
      type: 'MARK_READ',
      payload: moduleID,
    })
  }

  return (
    <SkelefireContext.Provider
      value={{
        skelefire,
        togglePower,
        setCourses,
        setActivities,
        countUnreadActivities,
        markAsRead,
      }}
    >
      {children}
    </SkelefireContext.Provider>
  )
}

export { SkelefireContext, SkelefireProvider }
