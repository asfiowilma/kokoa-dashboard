import React, { createContext, useReducer } from 'react'

const INITIAL_STATE = {
  isExpanded: true,
}

const SidebarContext = createContext(INITIAL_STATE)

export const SidebarProvider = ({ children }) => {
  const [sidebar, dispatch] = useReducer(SidebarReducer, INITIAL_STATE)

  return (
    <SidebarContext.Provider
      value={{
        sidebar,
        dispatch,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function SidebarReducer(state, action) {
  switch (action.type) {
    case 'set_expanded':
      return { ...state, isExpanded: action.payload }
    default:
      return state
  }
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
