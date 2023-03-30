import React from 'react'
import { ImFlag } from 'react-icons/im'

const Biscotti = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
      <div className="col-span-1 md:col-span-3 card shadow-lg bg-base-100 md:card-normal">
        <div className="card-body lg:items-center flex flex-col lg:flex-row gap-2 md:gap-4">
          <div className="flex-1 md:flex-none card-title flex items-center gap-2">
            <ImFlag /> Overall Progress
          </div>
          <p className="text-stone-400">BYOC is 40% complete!</p>
          <progress
            className="flex-none lg:flex-1 w-full progress progress-success bg-base-300 h-6"
            value={0.4}
          ></progress>
          <p className="text-right -mt-8 mr-4 z-10 md:m-0">
            190/323 tasks completed
          </p>
        </div>
      </div>

      <div className="md:hidden flex w-full gap-3">
        <div className="btn btn-accent btn-sm">GPM</div>
        <div className="btn btn-accent btn-sm">Blockchain</div>
        <div className="btn btn-accent btn-sm">DevOps</div>
        <div className="btn btn-accent btn-sm">GDM</div>
        <div className="btn btn-accent btn-sm">Fintech</div>
      </div>

      <div className="md:hidden w-full tabs tabs-boxed bg-base-100">
        <div className="tab tab-active">Course 1</div>
        <div className="tab ">Course 1</div>
        <div className="tab ">Course 1</div>
        <div className="tab ">Course 1</div>
      </div>

      <div className="card bg-base-100 shadow-lg md:order-last">
        <div className="card-body">
          <div className="card-title">Tasks</div>
          <div className="form-control p-3 border-2 border-dashed border-base-content rounded-box border-opacity-50">
            <label htmlFor="task" className="label justify-start gap-4">
              <input id="task" type="checkbox" className="checkbox" />
              <span className="label-text">Ini task</span>
            </label>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <div className="card-title">Courses</div>
          <div className=" flex flex-col gap-3">
            {Array.from({ length: 5 }).map((i) => (
              <div className="group alert flex-col md:gap-2 transition cursor-pointer hover:bg-neutral-focus">
                <div className="flex justify-between w-full">
                  <div className="uppercase text-sm font-bold">Blockchain</div>
                  <div className="flex gap-2">
                    <div className="badge badge-primary"></div>
                    <div className="badge badge-accent"></div>
                    <div className="badge badge-outline"></div>
                    <div className="badge badge-outline"></div>
                  </div>
                </div>
                <progress
                  className="group-hover:bg-neutral transition progress progress-primary bg-base-300"
                  value={0.4}
                ></progress>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <div className="card-title">Blockchain Specialization</div>

          <div className="flex flex-col gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="group alert flex-col items-start md:gap-2 transition cursor-pointer hover:bg-neutral-focus">
                <div className="flex justify-between w-full">
                  <div className="uppercase text-sm font-bold">
                    Course {i + 1}
                  </div>
                  <div className="flex gap-2">
                    <div className="badge badge-primary"></div>
                    <div className="badge badge-primary"></div>
                    <div className="badge badge-accent"></div>
                    <div className="badge badge-outline"></div>
                  </div>
                </div>
                <p>Blockchain Basics</p>
                <progress
                  className="group-hover:bg-neutral transition progress progress-primary bg-base-300"
                  value={0.68}
                ></progress>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Biscotti
