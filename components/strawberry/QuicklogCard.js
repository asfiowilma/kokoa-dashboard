import React, { useEffect, useState } from 'react'

export default function QuicklogCard() {
  const [category, setCategory] = useState(0)
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10))

  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <div className="card-title flex justify-between items-center">
          <div>Quickadd Log</div> <div className="badge badge-accent">DDP1</div>
        </div>
        <div class="form-control flex flex-col gap-3">
          <select class="select select-bordered select-accent w-full max-w-xs">
            <option disabled="disabled" selected="selected">
              Category
            </option>
            <option>telekinesis</option>
            <option>time travel</option>
            <option>invisibility</option>
          </select>
          <textarea
            class="textarea h-24 textarea-bordered textarea-accent"
            placeholder="Description"
          ></textarea>
          <input
            type="date"
            defaultValue={date}
            class="input flex-1 input-accent input-sm input-bordered"
          />
          <div className="flex gap-2">
            <input type="time" class="input input-accent input-bordered" />
            <input type="time" class="input input-accent input-bordered" />
            <div className="btn btn-accent">Submit</div>
          </div>
        </div>
      </div>
    </div>
  )
}
