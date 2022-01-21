import { getActiveCourses, getUnreadActivities } from '@api/skelefire'
import { SkelefireContext } from '@context/SkelefireContext/SkelefireProvider'
import React, { useContext, useEffect } from 'react'

import MatchaCard from './matchaCard'
import SettingsCard from './settingsCard'
import SkelefireCard from './skelefireCard'
import StrawberryCard from './strawberryCard'
import TiramisuCard from './tiramisuCard'

export default function dashboard() {
  const { skelefire, setCourses, setActivities } = useContext(SkelefireContext)

  const matkul = [
    'Gamedev',
    'Gamedev',
    'Gamedev',
    'Gamedev',
    'Gamedev',
    'Gamedev',
  ]

  useEffect(() => {
    if (skelefire.courses.length == 0) {
      console.log('dashboard useeffects')
      getActiveCourses().then((res) => setCourses(res.data))
      getUnreadActivities().then((res) => setActivities(res.data))
    }
  }, [])

  return (
    <div className="w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex flex-col gap-4">
        <SettingsCard />
        <StrawberryCard />
      </div>
      <SkelefireCard />
      <MatchaCard {...{ matkul }} />
      <TiramisuCard />
    </div>
  )
}
