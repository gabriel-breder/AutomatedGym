import { useState } from "react";
import api from "../../services/api";

export function useAuth() {

  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (body, navigation) => {
    api.post('/auth/sign_in', body)
      .then(res => {
        setUser(res.data["data"])
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error)
        setError(true)
      })
  }

  const handleRegister = (body, navigation) => {
    api.post('/auth', body)
      .then(res => {
        setUser(res.data["data"])
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error)
        setError(true)
      })
  }

  return { handleLogin, handleRegister, user, error, setError }
}
