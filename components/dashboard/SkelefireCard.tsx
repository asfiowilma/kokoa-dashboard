import React, { useContext, useEffect, useState } from 'react'

import ActionButtons from '@components/skelefire/ActionButtons'
import ActivityTable from '@components/skelefire/ActivityTable'
import CourseLinks from '@components/skelefire/CourseLinks'
import CourseTabs from '@components/skelefire/CourseTabs'
import { useSkelefire } from '@hooks/useSkelefire'

export default function skelefireCard() {
  const [activeTab, setActiveTab] = useState('All')
  const [filteredActivities, setFilteredActivities] = useState([])

  const { courses, activities, countUnreadActivities } = useSkelefire()

  useEffect(() => {
    setFilteredActivities(activities)
    countUnreadActivities()
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

  return (
    <div className="md:col-span-2 lg:row-span-2 flex flex-col gap-4">
      <CourseLinks />
      <div className="flex-1 card bg-base-100 shadow-lg md:col-span-2 row-span-2">
        <div className="card-body flex flex-col gap-3">
          <ActionButtons />
          <CourseTabs {...{ coursesTabs, activeTab, onTabChange }} />
          <ActivityTable filteredActivities={filteredActivities} isOverview />
        </div>
      </div>
    </div>
  )
}
