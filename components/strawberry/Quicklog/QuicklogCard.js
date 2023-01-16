import React, { useEffect, useState } from 'react'
import useStrawberryStore from 'services/hooks/useStrawberryStore'
import QuicklogForm from './QuicklogForm'

export default function QuicklogCard() {
  const { courseData, activeCourse, setActiveCourse } = useStrawberryStore()
  const [course, setCourse] = useState()

  useEffect(() => {
    setCourse(courseData.find((course) => course.id == activeCourse))
  }, [activeCourse])

  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <div className="card-title flex justify-between items-center">
          <div>Quickadd Log</div>{' '}
          <a
            href={`https://scele.cs.ui.ac.id/course/view.php?id=${course?.sceleId}`}
            target="_blank"
          >
            <div className="badge badge-accent">{course?.name}</div>
          </a>
        </div>
        <select
          name="activeCourse"
          defaultValue={activeCourse.toString()}
          onChange={(e) => setActiveCourse(parseInt(e.target.value))}
          className="bg-neutral select mb-4"
        >
          <option value="" disabled>
            Select course
          </option>
          {courseData.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
        <QuicklogForm />
      </div>
    </div>
  )
}
