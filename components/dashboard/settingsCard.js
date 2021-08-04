import React from 'react'

export default function settingsCard() {
  return (
    <div className="card bg-base-100 shadow-lg">
        <div className="card-body">          
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">
                Skelefire <div className="badge badge-success ml-2 mr-auto">ON</div>
              </span>
              <input type="checkbox" checked="checked" className="toggle" />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">
                Strawberry <div className="badge badge-error ml-2 mr-auto">OFF</div>
              </span>
              <input type="checkbox" checked="" className="toggle" />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">
                Matcha <div className="badge badge-error ml-2 mr-auto">OFF</div>
              </span>
              <input type="checkbox" checked="" className="toggle" />
            </label>
          </div>
        </div>
      </div>
  )
}
