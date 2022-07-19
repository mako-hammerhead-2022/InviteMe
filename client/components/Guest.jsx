import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGuest } from '../actions'

import { sendEmail } from '../apis'

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

        <form onSubmit={handleSubmit}>
          <button type="submit">Send Invite</button>
        </form>
        <button onClick={handleDelete}>Delete Guest</button>
      </div>
    </>
  )
}
