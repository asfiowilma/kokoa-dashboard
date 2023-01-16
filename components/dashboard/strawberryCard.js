import { GiStrawberry } from 'react-icons/gi'
import QuicklogForm from '@components/strawberry/Quicklog/QuicklogForm'
import React, { useState, useEffect } from 'react'
import useStrawberryStore from 'services/hooks/useStrawberryStore'

export default function StrawberryCard() {
  const { courseData, activeCourse, setActiveCourse } = useStrawberryStore()
  const [course, setCourse] = useState()

  useEffect(() => {
    setCourse(courseData.find((course) => course.id == activeCourse))
  }, [activeCourse])

  return (
    <div className="card shadow-lg bg-base-100">
      <div className="card-body space-y-4">
        <div className="card-title flex justify-between">
          <div className="flex items-center">
            <GiStrawberry className="w-6 h-6 mr-2" /> Strawberry{' '}
          </div>
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
