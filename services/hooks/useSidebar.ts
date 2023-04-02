import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarState {
  isExpanded: boolean
  setIsExpanded: (to: boolean) => void
}

export const useSidebar = create<SidebarState>()(
  persist(
    (set, _get) => ({
      isExpanded: false,
      setIsExpanded: (to: boolean) => set({ isExpanded: to }),
    }),
    {
      name: 'sidebar-state', // name of the item in the storage (must be unique)
    }
  )
)
