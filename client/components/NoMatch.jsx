import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'

function NoMatch() {
  return (
    <Box
      bgImage="url('https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      backgroundSize={'cover'}
    >
      <Text
        color="#403F47"
        fontSize="6xl"
        fontWeight="extrabold"
        fontFamily={'m'}
      >
        404 Page not found
      </Text>
      <Box marginBottom={'100%'}></Box>

      <Button opacity={'100%'} marginBottom={'100%'}>
        Easter Egg 🥚
      </Button>
    </Box>
  )
}

export default NoMatch
