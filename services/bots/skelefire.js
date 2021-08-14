import { getSkeleFire, getUnreadActivities } from '@api/skelefire'
import { SkelefireContext } from '@context/SkelefireContext'
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

  const scrape = () => {
    getSkeleFire().then(() => {
      getUnreadActivities().then((res) => {
        setActivities(res.data)
        if (res.data.length > 0)
          Push.create('Skelefire', {
            body: 'New updates found!',
            icon: '/kokoa-skelefire.png',
            onClick: function () {
              window.focus()
              this.close()
            },
          })
      })
    })
  }

  return <div className="hidden" />
}

export default SkelefireBot