import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import {fetchGuestList} from ''

//Navbar component

export default function GuestList() {
  const guestList = useSelector((state) => state.guestList)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGuestList())
  }, [])

  return (
    <div>
      <h1>Guest List</h1>
      <div>
        Name: {guestList.name}
        Email: {guestList.email}
        RSVP: {guestList.rsvp}
        Extra Person: {guestList.extraPerson}
        Dietary Restrictions: {guestList.diet}
      </div>
      <div>
        <Link to="/">Send Invites</Link>
        <Link to="/">Add Guest</Link>
      </div>
    </div>
  )
}
