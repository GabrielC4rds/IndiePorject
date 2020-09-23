
import React, { useState, createContext} from 'react'


export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {

  const [User, setUser] = useState("")

  return (
    <StoreContext.Provider value={[User, setUser]}>
      {children}
    </StoreContext.Provider>
  )
}
