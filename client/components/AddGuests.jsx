import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGuests, addGuest } from '../actions'

export default function AddGuests() {
  const [guest, setGuest] = useState('')

  const dispatch = useDispatch()

  function handleChange(e) {
    e.preventDefault()
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Submit btn was clicked!!')
    dispatch(addGuest(guest))
    setGuest('')
    dispatch(fetchGuests())
  }

  useEffect(() => {
    dispatch(fetchGuests)
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Guest Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={guest.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={guest.email}
          onChange={handleChange}
        />
        <label htmlFor="plusName">Plus One:</label>
        <input
          id="plusName"
          type="text"
          name="plusName"
          value={guest.plusone_Name}
          onChange={handleChange}
        />
        <label htmlFor="dietary">Dietary:</label>
        <input
          id="dietary"
          type="text"
          name="dietary"
          value={guest.dietary}
          onChange={handleChange}
        />
        <label htmlFor="event">Event:</label>
        <input
          id="event"
          type="text"
          name="event"
          value={guest.event_id}
          onChange={handleChange}
        />
        <label htmlFor="tableNumber">Table Number:</label>
        <input
          id="tableNumber"
          type="text"
          name="tableNumber"
          value={guest.table_number}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
