import React from 'react'
import { useSkelefire } from '@hooks/useSkelefire'

export default function CourseLinks() {
  const { courses } = useSkelefire()
  return (
    <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-5 md:grid-rows-none gap-3">
      {courses.map((course) => (
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
