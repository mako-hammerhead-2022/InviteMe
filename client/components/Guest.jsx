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
        <Box
          borderWidth="3px"
          mt="30px"
          ml="4"
          py="4"
          px="8"
          display={'grid'}
          bgGradient="linear(to-l, #EB3349,#F45C43)"
          borderRadius="20pt"
          boxShadow="xl"
        >
          <Text fontSize="25pt" fontWeight="bold" color={'white'}>
            Guest Name: {guestInfo.name}
          </Text>
          <Text fontSize="15pt" fontWeight="bold" color={'white'}>
            Email: {guestInfo.email}
          </Text>
          <Text fontSize="15pt" fontWeight="bold" color={'white'}>
            Plus One: {guestInfo.plusone}
          </Text>
          <Text fontSize="15pt" fontWeight="bold" color={'white'}>
            Name of Plus One: {guestInfo.plusone_Name}
          </Text>
          <Text fontSize="15pt" fontWeight="bold" color={'white'}>
            Dietary: {guestInfo.dietary}
          </Text>
          <Text fontSize="15pt" fontWeight="bold" color={'white'}>
            RSVP: {guestInfo.rsvp}
          </Text>
          <Text fontSize="15pt" fontWeight="bold" color={'white'}>
            Event Id: {guestInfo.event_id}
          </Text>
          <Text fontSize="15pt" fontWeight="bold" color={'white'}>
            Group Number: {guestInfo.groupNumber}
          </Text>
        </Box>

        {/* //send id with invite button */}
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            colorScheme="messenger"
            margin={'10px'}
            size="lg"
          >
            Send Invite
          </Button>
        </form>
        <Button onClick={handleDelete} colorScheme="red" size="lg">
          Delete Guest
        </Button>
      </Center>
      <br></br>
    </>
  )
}
