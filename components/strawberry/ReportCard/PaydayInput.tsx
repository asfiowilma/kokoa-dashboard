import React, { useState } from 'react'

import { IoEllipsisVerticalSharp } from 'react-icons/io5'
import { setPayday } from '@api/strawberry'
import toast from 'react-hot-toast'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'

export const PaydayInput = ({ id }) => {
  const [date, setDate] = useState<string>()
  const [loading, setLoading] = useState(false)
  const { dispatch } = useStrawberry()

  const onSubmitPayday = async (e) => {
    e.preventDefault()
    setLoading(true)
    const payload = {
      is_paid: true,
      paid_on: date,
    }
    await setPayday(id, payload)
    dispatch({ type: 'set_payday', payload: { id, date } })
    toast.success('Yay payday!')
    setLoading(false)
  }

  return (
    <div className="dropdown dropdown-end text-left">
      <div tabIndex={0} className="btn btn-xs btn-ghost">
        <IoEllipsisVerticalSharp />
      </div>
      <ul
        tabIndex={0}
        className="p-4 shadow-lg dropdown-content text-primary-content bg-primary rounded-box w-72"
        style={{ whiteSpace: 'normal' }}
      >
        <span className="font-bold">I received this month's payment on</span>
        <form onSubmit={(e) => onSubmitPayday(e)} className="flex flex-col">
          <input
            type="date"
            className="input mt-2 bg-stone-200 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type="submit"
            className={`btn btn-sm self-end mt-2 ${loading && 'loading'}`}
            onClick={onSubmitPayday}
          >
            submit{loading && 'ting'}
          </button>
        </form>
      </ul>
    </div>
  )
}
