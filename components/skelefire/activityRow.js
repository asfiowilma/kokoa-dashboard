import React, { useContext } from 'react'

import moment from 'moment'
import { VscMailRead } from 'react-icons/vsc'
import { SkelefireContext } from '@context/SkelefireContext/SkelefireProvider'

export default function activityRow({ activity, isOverview }) {
  const { skelefire, markAsRead, setActivities } = useContext(SkelefireContext)

  const getCourseNameFromCourseId = (courseID) => {
    const course = skelefire.courses.find((c) => c.courseID === courseID)
    return course?.shortname
  }

  const selectActivity = () => {
    setActivities(
      skelefire.activities.map((a) =>
        a.moduleID == activity.moduleID ? { ...a, selected: !a.selected } : a
      )
    )
  }

  const markThisAsRead = (moduleID) => markAsRead([moduleID])

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={activity.selected}
          onClick={selectActivity}
          readOnly
          className="checkbox checkbox-sm"
        />
      </td>
      <td>
        <a
          href={`https://scele.cs.ui.ac.id/course/view.php?id=${activity.course}`}
          target="_blank"
          className="badge badge-accent"
        >
          {getCourseNameFromCourseId(activity.course)}
        </a>
      </td>
      <td
        className={`${
          isOverview ? 'max-w-snippet' : 'max-w-prose'
        } truncate text-left`}
      >
        {activity.content}
      </td>
      <td>{moment(activity.lastUpdated).fromNow()}</td>
      <td>
        <button
          onClick={() => markThisAsRead(activity.moduleID)}
          className="btn btn-sm btn-ghost"
        >
          <VscMailRead />
        </button>
      </td>
    </tr>
  )
}
