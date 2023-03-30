import React, { useContext } from 'react'
import { SkelefireContext } from '@context/SkelefireContext/SkelefireProvider'

export default function CourseLinks() {
  const { skelefire } = useContext(SkelefireContext)
  return (
    <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-5 md:grid-rows-none gap-3">
      {skelefire.courses.map((course) => (
        <a
          key={course.courseID}
          href={`https://scele.cs.ui.ac.id/course/view.php?id=${course.courseID}`}
          target="_blank"
          className="btn bg-accent text-accent-content rounded-box"
        >
          {course.shortname}
        </a>
      ))}
    </div>
  )
}
