import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGuest } from '../actions'

import { sendEmail } from '../apis'

import { Text, Box, Button, Grid, GridItem, Center } from '@chakra-ui/react'

export default function Guest({ guestInfo }) {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    const recipient = { email: guestInfo.email, id: guestInfo.id }
    e.preventDefault()
    sendEmail(recipient)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    const id = guestInfo.id
    dispatch(deleteGuest(id))
  }

  return (
    <>

      <Center>
        <Grid templateColumns="repeat(5, 1fr)" alignItems={'center'}>
          <GridItem>
            <Box
              bgColor="#FFD900"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              mt="30px"
              ml="4"
              py="4"
              px="8"
              width="500px"
            >
              <ul>
                <Text fontSize="25pt" fontWeight="bold">
                  Guest Name: {guestInfo.name}
                </Text>
                <Text fontSize="15pt" fontWeight="bold">
                  Email: {guestInfo.email}
                </Text>
                <Text fontSize="15pt" fontWeight="bold">
                  Plus One: {guestInfo.plusone}
                </Text>
                <Text fontSize="15pt" fontWeight="bold">
                  Name of Plus One: {guestInfo.plusone_Name}
                </Text>
                <Text fontSize="15pt" fontWeight="bold">
                  Dietary: {guestInfo.dietary}
                </Text>
                <Text fontSize="15pt" fontWeight="bold">
                  RSVP: {guestInfo.rsvp}
                </Text>
                <Text fontSize="15pt" fontWeight="bold">
                  Event Id: {guestInfo.event_id}
                </Text>
                <Text fontSize="15pt" fontWeight="bold">
                  Group Number: {guestInfo.groupNumber}
                </Text>
              </ul>
            </Box>

            {/* //send id with invite button */}
            <form onSubmit={handleSubmit}>
              <Button type="submit" colorScheme="messenger">
                Send Invite
              </Button>
            </form>
            <Button onClick={handleDelete} colorScheme="red">
              Delete Guest
            </Button>
          </GridItem>
        </Grid>
      </Center>
      <br></br>

    </>
  )
}
