import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BiTrash } from 'react-icons/bi'
import { GiStrawberry } from 'react-icons/gi'
import useStrawberryStore from 'services/hooks/useStrawberryStore'

export default function Index() {
  const { register, handleSubmit } = useForm()
  const { courseData, addCourseData, removeCourseData, isWorking, setIsWorking } = useStrawberryStore()
  
  const toggleWorkingPeriod = () => {
    setIsWorking(!isWorking)
  }

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body w-96">
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
        {courseData.length == 0 ? (
          <div className="alert">You're not assisting any course now.</div>
        ) : (
          <table className="table table-compact">
            <thead>
              <th>Course</th>
              <th>Log</th>
              <th>Scele</th>
              <th></th>
            </thead>
            <tbody>
              {courseData.map((course) => (
                <tr>
                  <td>{course.name}</td>
                  <td className="space-x-2">
                    <a
                      href={`https://siasisten.cs.ui.ac.id/log/listLogMahasiswa/${course.id}/`}
                      target="_blank"
                      className="badge badge-secondary"
                    >
                      {course.id}
                    </a>
                  </td>
                  <td>
                    <a
                      href={`https://scele.cs.ui.ac.id/course/view.php?id=${course.sceleId}`}
                      target="_blank"
                      className="badge badge-accent"
                    >
                      {course.sceleId}
                    </a>
                  </td>
                  <td>
                    <button
                      onClick={() => removeCourseData(course.id)}
                      className="btn btn-sm btn-ghost text-error btn-square"
                    >
                      <BiTrash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <h3 className="divider font-bold">New Course</h3>
        <form onSubmit={handleSubmit(addCourseData)} className="form-control">
          <label className="label">
            <span className="label-text">Course Name</span>
          </label>
          <input
            type="text"
            placeholder="Course name"
            className="input input-primary text-primary"
            {...register('name')}
          />
          <label className="label">
            <span className="label-text">Siasisten Course ID</span>
          </label>
          <input
            type="text"
            placeholder="Siasisten Course ID"
            {...register('id')}
            className="input input-primary text-primary"
          />
          <label className="label">
            <span className="label-text">Scele Course ID</span>
          </label>
          <input
            type="text"
            placeholder="Scele Course ID"
            {...register('sceleId')}
            className="input input-primary text-primary"
          />
          <button type="submit" className="btn self-end mt-2">
            submit
          </button>
        </form>
      </div>
    </div>
  )
}
