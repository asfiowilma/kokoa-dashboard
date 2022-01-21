import { GiStrawberry } from 'react-icons/gi'
import QuicklogForm from '@components/strawberry/Quicklog/QuicklogForm'
import React, { useState, useEffect } from 'react'

export default function StrawberryCard() {
  const [isWorking, setIsWorking] = useState()
  const [courseName, setCourseName] = useState('')
  const [sceleID, setSceleID] = useState('')

  useEffect(() => {
    setIsWorking(localStorage.getItem('strawberry_is_working') == 'true')
    setSceleID(localStorage.getItem('strawberry_course_scele') || '')
    setCourseName(localStorage.getItem('strawberry_course_name') || '')
  }, [])

  return (
    <div className="card shadow-lg bg-base-100">
      <div className="card-body space-y-4">
        <div className="card-title flex justify-between">
          <div className="flex items-center">
            <GiStrawberry className="w-6 h-6 mr-2" /> Strawberry{' '}
          </div>
          {isWorking ? (
            <a
              href={`https://scele.cs.ui.ac.id/course/view.php?id=${sceleID}`}
              target="_blank"
            >
              <div class="badge badge-accent">{courseName}</div>
            </a>
          ) : (
            <button className="btn btn-sm btn-ghost">refresh</button>
          )}
        </div>
        <QuicklogForm />
      </div>
    </div>
  )
}

/* <div className="alert flex justify-between items-center">
          <div>New Offers</div>
          <div className="badge badge-primary badge-outline">12</div>
        </div>
        <div className="flex bg-neutral-content text-neutral rounded-box h-full px-3 items-center cursor-pointer">
          <GiStrawberry />
          <GiStrawberry />
          <GiStrawberry />
        </div>
       */
