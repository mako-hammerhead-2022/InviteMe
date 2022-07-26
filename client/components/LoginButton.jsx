import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Center } from '@chakra-ui/react'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/callback`,
    })
  }

  return (
    !isAuthenticated && (
      <Center>
        <Button onClick={handleSignIn} colorScheme="teal" size="lg">
          Sign in
        </Button>
      </Center>
    )
  )
}

export default LoginButton
