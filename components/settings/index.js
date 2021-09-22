import React, { useState, useEffect } from 'react'
import { GiStrawberry } from 'react-icons/gi'

export default function Index() {
  const [isWorking, setIsWorking] = useState(false)
  const [courseName, setCourseName] = useState('')
  const [sceleID, setSceleID] = useState('')
  const [siasistenID, setSiasistenID] = useState('')

  useEffect(() => {
    setIsWorking(localStorage.getItem('strawberry_is_working') == 'true')
    setSceleID(localStorage.getItem('strawberry_course_scele') || '')
    setSiasistenID(localStorage.getItem('strawberry_course_siasisten') || '')
    setCourseName(localStorage.getItem('strawberry_course_name') || '')
  }, [])

  const toggleWorkingPeriod = () => {
    setIsWorking(!isWorking)
    localStorage.setItem('strawberry_is_working', !isWorking)
  }

  const sceleIdHandler = (e) => {
    setSceleID(e.target.value)
    localStorage.setItem('strawberry_course_scele', e.target.value)
  }

  const courseNameHandler = (e) => {
    setCourseName(e.target.value)
    localStorage.setItem('strawberry_course_name', e.target.value)
  }

  const siasistenIdHandler = (e) => {
    setSiasistenID(e.target.value)
    localStorage.setItem('strawberry_course_siasisten', e.target.value)
  }

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="card-title flex">
          <GiStrawberry className="w-6 h-6 mr-2" /> Strawberry{' '}
        </div>
        <div className="form-control w-full">
          <label htmlFor="wp-toggle" className="cursor-pointer label">
            <span className="label-text">Working Period</span>
            <input
              id="wp-toggle"
              type="checkbox"
              readOnly
              onClick={toggleWorkingPeriod}
              checked={isWorking}
              className="toggle toggle-primary"
            />
          </label>
        </div>
        <div id="strawberry-siasisten-course" className="form-control">
          <label className="label">
            <span className="label-text">Active Course Name</span>
          </label>
          <input
            type="text"
            placeholder="Active course name"
            value={courseName}
            onChange={courseNameHandler}
            className="input input-primary text-primary"
          />
        </div>
        <div id="strawberry-siasisten-course" className="form-control">
          <label className="label">
            <span className="label-text">Siasisten Course ID</span>
          </label>
          <input
            type="text"
            placeholder="Siasisten Course ID"
            value={siasistenID}
            onChange={siasistenIdHandler}
            className="input input-primary text-primary"
          />
        </div>
        <div id="strawberry-scele-course" className="form-control">
          <label className="label">
            <span className="label-text">Scele Course ID</span>
          </label>
          <input
            type="text"
            placeholder="Scele Course ID"
            value={sceleID}
            onChange={sceleIdHandler}
            className="input input-primary text-primary"
          />
        </div>
      </div>
    </div>
  )
}
