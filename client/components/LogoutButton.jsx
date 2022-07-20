import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Center } from '@chakra-ui/react'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <Center>
        <Button onClick={() => logout()} colorScheme="teal" size="lg">
          Sign Out
        </Button>
      </Center>
    )
  )
}

export default LogoutButton
