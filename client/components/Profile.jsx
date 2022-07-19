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
          <Text
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
          >
            Thank you, {user?.name}
          </Text>
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
