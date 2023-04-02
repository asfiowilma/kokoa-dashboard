import React, { useEffect, useState } from 'react'
import { getActiveCourses, getUnreadActivities } from '@api/skelefire'

import ActionButtons from './ActionButtons'
import ActivityTable from './ActivityTable'
import CourseTabs from './CourseTabs'
import CoursesLinks from './CourseLinks'
import { ROOT_URL } from 'services/constants'
import { useSkelefire } from '@hooks/useSkelefire'

export default function SkelefireComponent() {
  const [isLoading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('All')
  const [filteredActivities, setFilteredActivities] = useState([])

  const {
    activities,
    courses,
    setCourses,
    setActivities,
    countUnreadActivities,
  } = useSkelefire()

  useEffect(() => {
    if (courses.length == 0) {
      console.log('useeffects')
      getActiveCourses().then((res) => {
        setCourses(res.data)
        getUnreadActivities().then((res) => {
          setActivities(res.data)
          setFilteredActivities(res.data)
          countUnreadActivities()
          setLoading(false)
        })
      })
    } else {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    onTabChange(activeTab)
    countUnreadActivities()
  }, [activities])

  const onTabChange = (courseName) => {
    const activeCourseID =
      courses.find((c) => c.shortname === courseName)?.courseID || 0
    setActiveTab(courseName)
    setFilteredActivities(
      activities.filter((activities) =>
        activeCourseID ? activities.course === activeCourseID : true
      )
    )
  }

  var coursesTabs = [{ shortname: 'All' }, ...courses]

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={`${ROOT_URL}/kokoa-logo.png`}
        alt="loader"
        className="animate-pulse"
      />
    </div>
  ) : (
    <div className="w-full flex flex-col space-y-4 h-full">
      <CoursesLinks />
      <div className="flex-1 card bg-base-100 shadow-lg w-full">
        <div className="card-body flex flex-col gap-3">
          <ActionButtons />
          <CourseTabs {...{ coursesTabs, activeTab, onTabChange }} />
          <ActivityTable filteredActivities={filteredActivities} />
        </div>
      </div>
    </div>
  )
}
