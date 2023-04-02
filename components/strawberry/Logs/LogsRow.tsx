import React from 'react'
import { numberToRupiah } from 'services/utils/numberToRupiah'

import { LogDate } from './LogDate'

export const LogsRow = ({
  start_time,
  end_time,
  work_hours,
  work_earnings,
  category,
  description,
  status,
}) => {
  return (
    <tr className="text-stone-400 text-center">
      <td className="text-left">
        <LogDate {...{ start_time, end_time }} />
      </td>
      <td>{work_hours} hrs</td>
      <td>
        <div className={`badge text-stone-300 ${badgeColor[category]}`}>
          {category}
        </div>
      </td>
      <td className="text-left text-sm" style={{ whiteSpace: 'normal' }}>
        {description}
      </td>
      <td className="text-right">{numberToRupiah(work_earnings)}</td>
      <td>{status}</td>
    </tr>
  )
}

export const badgeColor = {
  'Asistensi/Tutorial': 'bg-rose-900',
  Mengoreksi: 'bg-pink-900',
  Mengawas: 'bg-fuchsia-900',
  'Persiapan Asistensi': 'bg-purple-900',
  'Membuat soal/tugas': 'bg-violet-900',
  Rapat: 'bg-amber-900',
  'Sit in Kelas': 'bg-orange-900',
  'Pengembangan Materi': 'bg-cyan-900',
  'Pengembangan apps': 'bg-sky-900',
  'Persiapan infra': 'bg-teal-900',
  Dokumentasi: 'bg-emerald-900',
  'Persiapan kuliah': 'bg-green-900',
  Penunjang: 'bg-lime-900',
  'Input Data': 'bg-yellow-900',
}
