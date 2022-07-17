import React, { useEffect } from 'react'
import Guest from './Guest'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGuests } from '../actions'

import AddGuests from './AddGuests'

export default function GuestList() {
  const guests = useSelector((state) => state.guests)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGuests())
  }, [])

  return (
    <div>
      <AddGuests />
      {guests
        // .sort((a, b) => a.name.localeCompare(b.name))
        .map((guest) => {
          return <Guest key={guest.id} guestInfo={guest} />
        })}
    </div>
  )
}
