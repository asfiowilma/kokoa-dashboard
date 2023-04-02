import { useMutation, useQueryClient } from '@tanstack/react-query'

import { BiPlus } from 'react-icons/bi'
import { ImSpinner } from 'react-icons/im'
import { createTask } from '@api/biscotti'
import { useBiscotti } from '@hooks/useBiscotti'
import { useForm } from 'react-hook-form'

const AddNewTask = ({ moduleId }: { moduleId: number }) => {
  const { addTask } = useBiscotti()
  const { register, handleSubmit, reset } = useForm()
  const createTaskMutation = useMutation({
    mutationFn: (data: BiscottiCreateTaskPayload) => createTask(data),
    onSuccess: (newTask) => {
      addTask(newTask, moduleId)
    },
  })

  const addNewTask = (data: BiscottiCreateTaskPayload) => {
    createTaskMutation.mutate(data)
    reset()
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-sm btn-square btn-ghost">
        {createTaskMutation.isLoading ? (
          <ImSpinner className="w-5 h-5 animate-spin" />
        ) : (
          <BiPlus className="w-5 h-5" />
        )}
      </label>
      <form
        onSubmit={handleSubmit(addNewTask)}
        className="dropdown-content w-64 bg-base-300 rounded-box p-4 form-control"
      >
        <label className="label">
          <span className="label-text">Add new task</span>
        </label>
        <input type="hidden" {...register('module')} value={moduleId} />
        <input
          type="text"
          {...register('name')}
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </form>
    </div>
  )
}

export default AddNewTask
