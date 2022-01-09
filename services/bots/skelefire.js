import { getSkeleFire, getUnreadActivities } from '@api/skelefire'
import { SkelefireContext } from '@context/SkelefireContext/SkelefireProvider'
import React, { useContext, useEffect } from 'react'
import Push from 'push.js'

const SkelefireBot = () => {
  const { setActivities } = useContext(SkelefireContext)

  useEffect(() => {
    scrape()
  }, [])

  useEffect(() => {
    let interval = setInterval(() => scrape(), 1000 * 60 * 15)
    return () => clearInterval(interval)
  })

  const scrape = async () => {
    await getSkeleFire()
    let res = await getUnreadActivities()
    setActivities(res.data)
    if (res.data.length > 0)
      Push.create('Skelefire', {
        body: 'New updates found!',
        icon: process.env.BACKEND_URL + '/kokoa-skelefire.png',
        onClick: function () {
          window.focus()
          this.close()
        },
      })
  }

  return <div className="hidden" />
}

export default SkelefireBot
