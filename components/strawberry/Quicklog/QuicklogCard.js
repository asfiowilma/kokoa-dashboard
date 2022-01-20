import React, { useEffect, useState } from 'react'
import QuicklogForm from './QuicklogForm'

export default function QuicklogCard() {
  const [courseName, setCourseName] = useState('')
  const [sceleID, setSceleID] = useState('')

  useEffect(() => {
    setSceleID(localStorage.getItem('strawberry_course_scele') || '')
    setCourseName(localStorage.getItem('strawberry_course_name') || '')
  }, [])

  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <div className="card-title flex justify-between items-center">
          <div>Quickadd Log</div>{' '}
          <a
            href={`https://scele.cs.ui.ac.id/course/view.php?id=${sceleID}`}
            target="_blank"
          >
            <div className="badge badge-accent">{courseName}</div>
          </a>
        </div>
        <QuicklogForm />
      </div>
    </div>
  )
}
