import React, { useState } from 'react'
import { quickAddLog, scrapeLogs } from '@api/strawberry'
import toast from 'react-hot-toast'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import { useForm } from 'react-hook-form'
import useStrawberryStore from 'services/hooks/useStrawberryStore'

export const categories = [
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

export default function QuicklogForm() {
  const { register, handleSubmit, reset } = useForm()
  const { activeCourse } = useStrawberryStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [category, setCategory] = useState(0)
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10))
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()

  const { dispatch } = useStrawberry()

  const submitLog = (data) => {
    console.log('🚀 ~ file: QuicklogForm.js:36 ~ submitLog ~ data', data)
    setIsSubmitting(true)
    quickAddLog({ ...data, id: activeCourse })
      .then(() => {
        reset()
        toast.success('We here to DROP SOME MONEY💰💵')
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setIsSubmitting(false))
  }

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
      toast.success('We here to DROP SOME MONEY💰💵')
      const response = await scrapeLogs()
      const logs_ = response.data.data
      logs_.sort((a, b) => (a.start_time > b.start_time ? -1 : 1))
      dispatch({ type: 'set_logs', payload: logs_ })
      toast.success('Logs updated!')
    } catch (err) {
      toast.error(err.message)
      setIsSubmitting(false)
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
    <form
      onSubmit={handleSubmit(submitLog)}
      className="form-control flex flex-col gap-3"
    >
      <select
        className="select bg-stone-800 select-sm w-full"
        {...register('category')}
      >
        <option disabled="disabled" value={0}>
          Category
        </option>
        {categories.map((ctr, i) => (
          <option key={i} value={i < 3 ? i + 1 : i + 2}>
            {ctr}
          </option>
        ))}
      </select>
      <textarea
        {...register('description')}
        className="textarea h-24 bg-stone-800"
        placeholder="Description"
      ></textarea>
      <input
        type="date"
        {...register('date')}
        className="input flex-1 input-sm bg-stone-800"
      />
      <div className="grid grid-cols-3 gap-2">
        <input
          {...register('startTime')}
          type="time"
          className="input bg-stone-800 pr-2"
        />
        <input
          {...register('endTime')}
          type="time"
          className="input bg-stone-800 pr-2"
        />
        <button
          type="submit"
          className={`btn btn-accent ${isSubmitting && 'loading'}`}
        >
          {isSubmitting ? '' : 'submit'}
        </button>
      </div>
    </form>
  )
}
