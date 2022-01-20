import React from 'react'
import { SectionTab } from '../SectionTab'
import { ThisMonthStats } from '../Stats'
import QuicklogCard from './QuicklogCard'

export const QuicklogSection = ({
  currentMonthData,
  isLoading,
  tab,
  setTab,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <QuicklogCard />
      <ThisMonthStats {...{ currentMonthData, isLoading }} />
      <SectionTab {...{ tab, setTab }} />
    </div>
  )
}
