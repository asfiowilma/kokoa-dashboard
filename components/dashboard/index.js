import React, { useContext, useEffect } from 'react'

import SettingsCard from './settingsCard'
import SkelefireCard from './skelefireCard'
import StrawberryCard from './strawberryCard'
import MatchaCard from './matchaCard'
import TiramisuCard from './tiramisuCard'
import { getActiveCourses, getUnreadActivities } from '@api/skelefire'
import { SkelefireContext } from '@context/SkelefireContext'

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
    if (skelefire.courses.length > 0) {
      getActiveCourses().then((res) => setCourses(res.data))
      getUnreadActivities().then((res) => setActivities(res.data))
    }
  }, [])

  return (
    <div className="w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-3">
      <SettingsCard />
      <SkelefireCard />
      <StrawberryCard />
      <MatchaCard {...{ matkul }} />
      <TiramisuCard />
    </div>
  )
}
