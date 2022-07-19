import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import { Box, Center, Text, Button } from '@chakra-ui/react'

import Profile from './Profile'

const LoginPage = () => {
  const { isLoading, error } = useAuth0()
  return (
    <Box
      bgImage="url('https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      backgroundSize={'cover'}
    >
      <Box width="100%" bgColor={'white'}>
        <Center marginBottom={'15%'}>
          <Text
            color="#403F47"
            fontSize="6xl"
            fontWeight="extrabold"
            fontFamily={'m'}
            textShadow="0.5px 0.5px #777777"
          >
            💍 - Welcome to InviteMe - 💍
          </Text>
        </Center>
      </Box>

      <Center>
        {' '}
        <Box
          ml={2}
          bgColor="#FDFDFD "
          width="40%"
          borderRadius="20pt"
          boxShadow="xl"
          paddingTop={'30px'}
          paddingBottom="30px"
        >
          <Center marginBottom={'5%'}>
            <Text
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              Please Sign In to Respond to Your Invite
            </Text>
          </Center>

          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <>
              <LoginButton />
              <Profile />
            </>
          )}
        </Box>
      </Center>

      <Box marginBottom={'100%'}></Box>
      <Button opacity={'100%'} marginBottom={'100%'}>
        Easter Egg 🥚
      </Button>
    </Box>
  )
}

export default LoginPage
