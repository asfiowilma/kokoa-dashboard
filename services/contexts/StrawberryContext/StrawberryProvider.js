import React, { createContext, useReducer } from 'react'
import StrawberryReducer from './StrawberryReducer'

const INITIAL_STATE = {
  listings: [],
  reports: [],
  logs: [],
}

const StrawberryContext = createContext(INITIAL_STATE)

const StrawberryProvider = ({ children }) => {
  const [strawberry, dispatch] = useReducer(StrawberryReducer, INITIAL_STATE)

  const value = { strawberry, dispatch }
  return (
    <StrawberryContext.Provider value={value}>
      {children}
    </StrawberryContext.Provider>
  )
}

export { StrawberryContext, StrawberryProvider }
