import { createContext } from "react";
import { useAuth } from "./hooks/useAuth";

const GlobalContext = createContext()

function GlobalProvider({ children }) {
  const {
    handleLogin,
    user,
    error,
    setError
  } = useAuth()

  return (
    <GlobalContext.Provider
      value={
        {
          handleLogin,
          user,
          error,
          setError
        }
      }>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
