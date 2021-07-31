import React from 'react'

export default function settingsCard() {
  return (
    <div className="card bg-base-100 shadow-lg">
        <div className="card-body">          
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">
                Skelefire <div className="badge badge-success ml-2 mr-auto">ON</div>
              </span>
              <input type="checkbox" checked="checked" class="toggle" />
            </label>
          </div>
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">
                Strawberry <div className="badge badge-error ml-2 mr-auto">OFF</div>
              </span>
              <input type="checkbox" checked="" class="toggle" />
            </label>
          </div>
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">
                Matcha <div className="badge badge-error ml-2 mr-auto">OFF</div>
              </span>
              <input type="checkbox" checked="" class="toggle" />
            </label>
          </div>
        </div>
      </div>
  )
}
