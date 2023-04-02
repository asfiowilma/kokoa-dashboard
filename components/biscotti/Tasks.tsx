import { getModulesByCourse, updateTask } from '@api/biscotti'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import AddNewTask from './AddNewTask'
import { COURSE } from './Courses'
import { ImSpinner } from 'react-icons/im'
import { ROOT_URL } from 'services/constants'
import React from 'react'
import { useBiscotti } from '@hooks/useBiscotti'
import { useRouter } from 'next/router'

const Tasks = () => {
  const { query } = useRouter()
  const { activeCourse, modules, setModules } = useBiscotti()
  const { isLoading } = useQuery({
    queryKey: ['tasks', activeCourse?.id, `${activeCourse?.id}-modules`],
    queryFn: ({ queryKey }) => getModulesByCourse(queryKey[1] as number),
    enabled: !!query[COURSE],
    onSuccess: (results) => {
      setModules(results)
    },
  })

  if (!query[COURSE])
    return (
      <div className="card bg-base-100 shadow-lg md:order-last">
        <div className="card-body">
          <div className="card-title">Tasks</div>
          <div className="p-3 border-2 border-dashed border-base-content rounded-box border-opacity-50 grid place-items-center h-full">
            <div className="space-y-4 text-center">
              <img
                src={`${ROOT_URL}/empty-inbox.svg`}
                alt="empty"
                className="h-36"
              />
              <p>No Tasks Found</p>
            </div>
          </div>
        </div>
      </div>
    )

  return isLoading ? (
    <div className="card shadow-lg bg- bg-base-300 animate-pulse md:card-normal">
      <div className="card-body grid place-items-center">
        <ImSpinner className="animate-spin w-8 h-8" />
      </div>
    </div>
  ) : (
    <div className="card bg-base-100 shadow-lg md:order-last md:max-h-[calc(100vh_-_11.5rem)] scrollbar scrollbar-hidden hover:scrollbar-width-1 hover:scrollbar-track-transparent hover:scrollbar-thumb-stone-500 hover:scrollbar-track-radius-full overflow-auto">
      <div className="card-body">
        <div className="card-title sticky top-0">
          <span>Tasks</span>
          <span className="block md:hidden text-base text-stone-300">
            {activeCourse.name}
          </span>
        </div>
        <div
          className={`form-control p-3 border-2 border-dashed border-base-content rounded-box border-opacity-50 h-full ${
            modules.length == 0 ? 'grid place-items-center' : ''
          }`}
        >
          {modules.length == 0 ? (
            <div className="space-y-4 text-center">
              <img
                src={`${ROOT_URL}/empty-inbox.svg`}
                alt="empty"
                className="h-36"
              />
              <p>No Tasks Found</p>
            </div>
          ) : (
            modules.map((module) => (
              <>
                <div className="flex items-center justify-between bg-stone-900 rounded-btn">
                  <div className="px-2 text-sm uppercase font-bold">
                    {module.name}
                  </div>
                  <AddNewTask moduleId={module.id} />
                </div>
                {module.tasks.map((task) => (
                  <Task key={task.id} task={task} moduleId={module.id} />
                ))}
              </>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

const Task = ({ task, moduleId }: { task: BiscottiTask; moduleId: number }) => {
  const { toggleCompleteTask } = useBiscotti()
  const completeTaskMutation = useMutation({
    mutationFn: (isCompleted: boolean) => updateTask(task.id, isCompleted),
    onSuccess: (_, isCompleted) => {
      toggleCompleteTask(task.id, moduleId, isCompleted)
    },
  })

  return (
    <label
      htmlFor={`task-${task.id}`}
      className="label justify-start gap-4 cursor-pointer"
    >
      <input
        id={`task-${task.id}`}
        type="checkbox"
        className="checkbox"
        defaultChecked={task.is_completed}
        onChange={(e) => completeTaskMutation.mutate(e.target.checked)}
      />
      <span
        className={`label-text transition ${
          task.is_completed
            ? 'text-stone-500 line-through'
            : 'text-stone-300  hover:text-neutral-content '
        }`}
      >
        {task.name}
      </span>
    </label>
  )
}

export default Tasks
