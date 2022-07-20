import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Center } from '@chakra-ui/react'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <article className="column">
        <Center>
          <h2 aria-label="login message" className="login-welcome">
            {`Thank you, ${user?.name}`}
          </h2>
        </Center>
      </article>
    )
  )
}

export default Profile
