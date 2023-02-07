import { useState } from "react";
import api from "../../services/api";

export function useAuth() {

  const [user, setUser] = useState('')
  const [error, setError] = useState(false)

  const handleLogin = (body, navigation) => {
    api.post('/auth/sign_in', body)
      .then(res => {
        setUser(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
        console.log(body, headers)
        setError(true)
      })
  }

  return { handleLogin, user, error, setError }
}
