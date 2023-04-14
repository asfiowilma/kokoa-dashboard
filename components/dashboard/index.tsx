import { getActiveCourses, getUnreadActivities } from '@api/skelefire'

import SkelefireCard from './SkelefireCard'
import Stats from '@components/biscotti/Stats'
import StrawberryCard from './StrawberryCard'
import { useEffect } from 'react'
import { useSkelefire } from '@hooks/useSkelefire'

export default function Dashboard() {
  const { courses, setCourses, setActivities } = useSkelefire()

  useEffect(() => {
    if (courses.length == 0) {
      console.log('dashboard useeffects')
      getActiveCourses().then((res) => setCourses(res.data))
      getUnreadActivities().then((res) => setActivities(res.data))
    }
  }, [])

  return (
    <div className="w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex flex-col gap-4">
        <StrawberryCard />
        <Stats isDashboard />
      </div>
      <SkelefireCard />
    </div>
  )
}
