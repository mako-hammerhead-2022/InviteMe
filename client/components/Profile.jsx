import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Center, Text } from '@chakra-ui/react'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <article className="column">
        {/* {JSON.stringify(user)} */}
        {/* {user?.picture && <img src={user.picture} alt={user?.name} />} */}
        <Center>
          <h2 aria-label="login message" className="login-welcome">
            {`Thank you, ${user?.name}`}
          </h2>
        </Center>

        {/* <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>             
              {objKey}: {user[objKey]}{' '}
            </li>
          ))}
        </ul> */}

      </article>
    )
  )
}

export default Profile
