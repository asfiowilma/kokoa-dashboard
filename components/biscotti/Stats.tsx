import { ImFlag, ImSpinner } from 'react-icons/im'

import { getTaskStats } from '@api/biscotti'
import { useBiscotti } from '@hooks/useBiscotti'
import { useQuery } from '@tanstack/react-query'

const Stats = () => {
  const { stats, setStats } = useBiscotti()
  const { isLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: getTaskStats,
    onSuccess: (result) => {
      setStats(result)
    },
  })

  return isLoading ? (
    <div className="col-span-1 md:col-span-3 card shadow-lg bg- bg-base-300 animate-pulse md:card-normal">
      <div className="card-body grid place-items-center">
        <ImSpinner className="animate-spin w-8 h-8" />
      </div>
    </div>
  ) : (
    <div className="order-first col-span-1 md:col-span-3 card shadow-lg bg-base-100 md:card-normal">
      <div className="card-body lg:items-center flex flex-col lg:flex-row gap-2 md:gap-4">
        <div className="flex-1 md:flex-none card-title flex items-center gap-2">
          <ImFlag /> Overall Progress
        </div>
        <p className="text-stone-400">
          BYOC is {(stats?.completed / stats?.total * 100).toFixed(2)}% complete!
        </p>
        <progress
          className="flex-none lg:flex-1 w-full progress progress-success bg-base-300 h-6"
          value={stats?.completed / stats?.total}
        ></progress>
        <p className="text-right -mt-8 mr-4 z-10 md:m-0">
          {stats?.completed}/{stats?.total} tasks completed
        </p>
      </div>
    </div>
  )
}

export default Stats
