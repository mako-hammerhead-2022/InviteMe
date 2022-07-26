import React, { useEffect } from 'react'
import Guest from './Guest'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGuests } from '../actions'

import AddGuests from './AddGuests'

import { SimpleGrid } from '@chakra-ui/react'

export default function GuestList() {
  const guests = useSelector((state) => state.guests)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGuests())
  }, [])

  return (
    <>
      <AddGuests />
      <SimpleGrid autoColumns={'true'} autoRows="true" spacing="40px">
        {guests
          // .sort((a, b) => a.name.localeCompare(b.name))
          .map((guest) => {
            return <Guest key={guest.id} guestInfo={guest} />
          })}
      </SimpleGrid>
    </>
  )
}
