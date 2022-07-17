import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGuest } from '../actions'

import { sendEmail } from '../apis'

export default function Guest({ guestInfo }) {
  // console.log(guestInfo)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    // [{email: '', name: '', id: ''}]
    // const recipients = guests.map((guest) => ({
    //   email: guest.email,
    //   id: guest.id,
    // }))
    const recipient = { email: guestInfo.email, id: guestInfo.id }
    e.preventDefault()
    sendEmail(recipient)
    // console.log('button clicked')
  }

  const handleDelete = (e) => {
    e.preventDefault()
    const id = guestInfo.id
    dispatch(deleteGuest(id))
  }

  return (
    <>
      <div>
        <div>
          <ul>
            <li>Guest Name: {guestInfo.name}</li>
            <li>Email: {guestInfo.email}</li>
            <li>Plus One: {guestInfo.plusone}</li>
            <li>Name of Plus One: {guestInfo.plusone_Name}</li>
            <li>Dietary: {guestInfo.dietary}</li>
            <li>RSVP: {guestInfo.rsvp}</li>
            <li>Event Id: {guestInfo.event_id}</li>
            <li>Group Number: {guestInfo.groupNumber}</li>
          </ul>
        </div>
        {/* //send id with invite button */}
        <form onSubmit={handleSubmit}>
          <button type="submit">Send Invite</button>
        </form>
        <button onClick={handleDelete}>Delete Guest</button>
      </div>
    </>
  )
}
