import React from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { numberToRupiah } from 'services/utils/numberToRupiah'
import { IoEllipsisVerticalSharp } from 'react-icons/io5'
import { PaydayInput } from './PaydayInput'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import moment from 'moment'

export const Detailed = () => {
  const {
    strawberry: { reports },
  } = useStrawberry()

  return (
    <>
      <table className="table table-compact text-center">
        <thead>
          <th>month</th>
          <th>work hour</th>
          <th>earning</th>
          <th>net earning</th>
          <th>status</th>
          <th>paid on</th>
          <th></th>
        </thead>
        <tbody>
          {reports.map((data) => (
            <tr key={data.report_id}>
              <td>{data.month}</td>
              <td className="flex items-center gap-1 text-sky-700 flex-1 ml-2">
                <AiFillClockCircle />
                {data.work_hours} hr
              </td>
              <td className="text-stone-400 text-right">
                {numberToRupiah(data.earnings)}
              </td>
              <td className="text-stone-400 text-right">
                {data.earnings > 0
                  ? numberToRupiah(data.earnings - 2900)
                  : numberToRupiah(data.earnings)}
              </td>
              <td className="text-center">
                {data.is_paid ? (
                  <div className="badge badge-success">paid</div>
                ) : (
                  <div className="badge">unpaid</div>
                )}
              </td>
              <td>
                {data.paid_on && moment(data.paid_on).format('D MMM YYYY')}
              </td>
              <td className="text-right">
                <PaydayInput id={data.report_id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
