import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGuest } from '../actions/index'

export default function Guest({ guestInfo }) {
  // console.log(guestInfo)
  const dispatch = useDispatch()
  const id = guestInfo.id

  function handleDelete() {
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
      <button onClick={handleDelete}>Delete Guest</button>
    </div>
  )
}
