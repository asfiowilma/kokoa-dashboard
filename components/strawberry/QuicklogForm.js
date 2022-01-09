import React, { useState } from 'react'
import { quickAddLog } from '@api/strawberry'
import toast from 'react-hot-toast'

export default function QuicklogForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [category, setCategory] = useState(0)
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10))
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()
  const categories = [
    'Asistensi/Tutorial',
    'Mengoreksi',
    'Mengawas',
    'Persiapan Asistensi',
    'Membuat soal/tugas',
    'Rapat',
    'Sit in Kelas',
    'Pengembangan Materi',
    'Pengembangan apps',
    'Persiapan infra',
    'Dokumentasi',
    'Persiapan kuliah',
    'Penunjang',
    'Input Data',
  ]

  const submitHandler = async () => {
    var log = {
      category,
      description,
      date,
      startTime,
      endTime,
    }
    setIsSubmitting(true)
    try {
      await quickAddLog(log)
      setIsSubmitting(false)
      resetForm()
    } catch (err) {
      toast.error(err.message)
    }
  }

  const resetForm = () => {
    setCategory(0)
    setDate(new Date().toISOString().substr(0, 10))
    setDescription('')
    setStartTime()
    setEndTime()
  }

  return (
    <form onSubmit={submitHandler} className="form-control flex flex-col gap-3">
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className="select bg-stone-800 select-sm w-full max-w-xs"
      >
        <option disabled="disabled" value={0}>
          Category
        </option>
        {categories.map((category, i) => (
          <option key={i} value={i < 3 ? i + 1 : i + 2}>
            {category}
          </option>
        ))}
      </select>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="textarea h-24 bg-stone-800"
        placeholder="Description"
      ></textarea>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input flex-1 input-sm bg-stone-800"
      />
      <div className="grid grid-cols-3 gap-2">
        <input
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          type="time"
          className="input bg-stone-800 pr-2"
        />
        <input
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          type="time"
          className="input bg-stone-800 pr-2"
        />
        <div
          className={`btn btn-accent ${isSubmitting && 'loading'}`}
          onClick={submitHandler}
        >
          {isSubmitting ? '' : 'submit'}
        </div>
      </div>
    </form>
  )
}
