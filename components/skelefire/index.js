import React, { useContext, useEffect, useState } from 'react'

import ActionButtons from './ActionButtons'
import ActivityTable from './ActivityTable'
import CoursesLinks from './CourseLinks'
import CourseTabs from './CourseTabs'

import { getUnreadActivities, getActiveCourses } from '@api/skelefire'
import { SkelefireContext } from '@context/SkelefireContext/SkelefireProvider'

export default function Index() {
  const [isLoading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('All')
  const [filteredActivities, setFilteredActivities] = useState([])

  const { skelefire, setCourses, setActivities, countUnreadActivities } =
    useContext(SkelefireContext)

  useEffect(() => {
    if (skelefire.courses.length == 0) {
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
  }, [skelefire.activities])

  const onTabChange = (courseName) => {
    const activeCourseID =
      skelefire.courses.find((c) => c.shortname === courseName)?.courseID || 0
    setActiveTab(courseName)
    setFilteredActivities(
      skelefire.activities.filter((activities) =>
        activeCourseID ? activities.course === activeCourseID : true
      )
    )
  }

  var coursesTabs = [{ shortname: 'All' }, ...skelefire.courses]

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={process.env.BACKEND_URL + '/kokoa-logo.png'}
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
          <ActivityTable activities={filteredActivities} />
        </div>
      </div>
    </div>
  )
}
