import React, { useState } from 'react'

import ActivityRow from './ActivityRow'
import { useSkelefire } from '@hooks/useSkelefire'

interface ActivityTableProps {
  filteredActivities: SkelefireActivities[]
  isOverview?: boolean
}

export default function ActivityTable({
  filteredActivities,
  isOverview,
}: ActivityTableProps) {
  const { activities, setActivities } = useSkelefire()

  const [isSelectedAll, setSelectAll] = useState(
    filteredActivities.every((a) => a.selected)
  )

  const selectActivity = () => {
    setSelectAll(!isSelectedAll)
    setActivities(activities.map((a) => ({ ...a, selected: isSelectedAll })))
  }

  return (
    <div
      className={`${
        isOverview ? 'max-h-64' : 'max-h-80'
      } overflow-auto scrollbar scrollbar-hidden hover:scrollbar-width-1 hover:scrollbar-track-transparent hover:scrollbar-thumb-yellow-600 hover:scrollbar-track-radius-full pr-1.5`}
    >
      <table className="table table-compact w-full text-center relative">
        <thead className="sticky top-0 z-20">
          <tr>
            <th>
              <input
                type="checkbox"
                checked={filteredActivities.every((a) => a.selected)}
                onClick={selectActivity}
                readOnly
                className="checkbox checkbox-sm"
              />
            </th>
            <th>Course</th>
            <th className="text-left">Activity Name</th>
            <th>Last Update</th>
            <th></th>
          </tr>
        </thead>
        {filteredActivities.length != 0 && (
          <tbody>
            {filteredActivities.map((activity) => (
              <ActivityRow
                key={activity.moduleID}
                activity={activity}
                isOverview={isOverview}
              />
            ))}
          </tbody>
        )}
      </table>
      {filteredActivities.length == 0 && (
        <div className="w-full pt-6 flex justify-center">
          <img
            src={process.env.BACKEND_URL + '/empty-inbox.svg'}
            alt="empty"
            className={isOverview ? 'h-48' : 'h-60'}
          />
        </div>
      )}
    </div>
  )
}
