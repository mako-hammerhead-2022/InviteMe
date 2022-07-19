import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'
// import LoginButton from './LoginButton'
import { Box, Center, Text, Button } from '@chakra-ui/react'

const LogoutPage = () => {
  const { isLoading, error } = useAuth0
  return (
    <Box
      bgImage="url('https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      backgroundSize={'cover'}
    >
      <Center>
        {' '}
        <Box
          ml={2}
          bgColor="#FDFDFD "
          width="50%"
          borderRadius="20pt"
          boxShadow="xl"
          paddingTop={'30px'}
          paddingBottom="30px"
          marginTop={'15%'}
        >
          <Center marginBottom={'5%'}>
            <Text
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              All done! RSVP form has been successfully submitted.
            </Text>
          </Center>

          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <>
              <LogoutButton />
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

export default LogoutPage
