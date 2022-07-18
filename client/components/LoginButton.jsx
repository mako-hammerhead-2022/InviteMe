import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/callback`,
    })
  }

  return !isAuthenticated && <button onClick={handleSignIn}>Sign in</button>
}

export default LoginButton
