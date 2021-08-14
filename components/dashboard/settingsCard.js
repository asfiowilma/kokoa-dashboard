import { SkelefireContext } from '@context/SkelefireContext'
import React, { useContext } from 'react'
import SkelefireBot from 'services/bots/skelefire'

export default function SettingsCard() {
  const { skelefire, togglePower } = useContext(SkelefireContext)
  const { isActive } = skelefire

  const activateSkelefire = () => {
    togglePower()
  }

  return (
    <div className="card bg-base-100 shadow-lg">
      {skelefire.isActive && <SkelefireBot />}
      <div className="card-body">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">
              Skelefire{' '}
              <div
                className={`badge ${
                  isActive ? 'badge-success' : 'badge-error'
                } ml-2 mr-auto`}
              >
                {isActive ? 'ON' : 'OFF'}
              </div>
            </span>
            <input
              type="checkbox"
              readOnly
              onClick={activateSkelefire}
              checked={isActive}
              className="toggle"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">
              Strawberry{' '}
              <div className="badge badge-error ml-2 mr-auto">OFF</div>
            </span>
            <input type="checkbox" readOnly checked="" className="toggle" />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">
              Matcha <div className="badge badge-error ml-2 mr-auto">OFF</div>
            </span>
            <input type="checkbox" readOnly checked="" className="toggle" />
          </label>
        </div>
      </div>
    </div>
  )
}
