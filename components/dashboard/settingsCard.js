import { SkelefireContext } from '@context/SkelefireContext/SkelefireProvider'
import React, { useContext } from 'react'
import SkelefireBot from 'services/bots/skelefire'

export default function SettingsCard() {
  const { skelefire, togglePower } = useContext(SkelefireContext)
  const { isActive } = skelefire

  const activateSkelefire = () => {
    togglePower()
  }

  return (
    <div className="alert bg-base-100 shadow-lg">
      {skelefire.isActive && <SkelefireBot />}
      <div className="form-control w-full">
        <label htmlFor="skelefire-toggle" className="cursor-pointer label">
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
            id="skelefire-toggle"
            type="checkbox"
            readOnly
            onClick={activateSkelefire}
            checked={isActive}
            className="toggle"
          />
        </label>
      </div>
    </div>
  )
}
