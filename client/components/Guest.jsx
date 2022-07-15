import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteGuest } from '../actions'

import { sendEmails } from '../apis'

export default function Guest({ guestInfo }) {
  // console.log(guestInfo)
  const dispatch = useDispatch()

  // const guests = useSelector((state) => state.guests)

  const handleSubmit = (e) => {
    // [{email: '', name: '', id: ''}]
    // const recipients = guests.map((guest) => ({
    //   email: guest.email,
    //   id: guest.id,
    // }))
    const recipients = guestInfo.email
    e.preventDefault()
    sendEmails(recipients)
    console.log('button clicked')
  }

  const handleDelete = (e) => {
    e.preventDefault()
    const id = guestInfo.id
    dispatch(deleteGuest(id))
  }

  return (
    <div>
      <ul>
        <li>Guest Name: {guestInfo.name}</li>
        <li>Email: {guestInfo.email}</li>
        <li>Plus One: {guestInfo.plusone}</li>
        <li>Name of Plus One: {guestInfo.plusone_Name}</li>
        <li>Dietary: {guestInfo.dietary}</li>
        <li>RSVP: {guestInfo.rsvp}</li>
        <li>Event Id: {guestInfo.event_id}</li>
        <li>Table Number: {guestInfo.table_Number}</li>
      </ul>
      <button>Add Guest</button>
      {/* //send id with invite button */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Send Invite</button>
      </form>

      <button onClick={handleDelete}>Delete Guest</button>
    </div>
  )
}
