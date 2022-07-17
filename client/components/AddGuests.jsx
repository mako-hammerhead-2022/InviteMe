import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGuests, addGuest } from '../actions'

export default function AddGuests() {
  const initialState = {
    name: '',
    email: '',
    rsvp: '1',
    plusone: '0',
    plusone_Name: '',
    dietary: '',
    event_id: '',
    groupNumber: '',
  }
  const [guest, setGuest] = useState(initialState)

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
        <p>
          <label htmlFor="rsvp">Are you coming?</label>
        </p>
        <select
          name="rsvp"
          value={guest.rsvp}
          onChange={(evt) => handleChange(evt)}
        >
          <option name="rsvp" value="1">
            Yeeea!
          </option>
          <option name="rsvp" value="0">
            Yeah, but Naaah
          </option>
        </select>
        <p>
          <label htmlFor="plusone">Would you like to bring a plus one?</label>
        </p>
        <select
          name="plusone"
          value={guest.plusone}
          onChange={(evt) => handleChange(evt)}
        >
          <option name="plusone" value="0">
            No, I fly solo.
          </option>
          <option name="plusone" value="1">
            Yes, I can't be alone for 5 minutes.
          </option>
        </select>
        <label htmlFor="plusone_Name">Name of Plus One:</label>
        <input
          id="plusone_Name"
          type="text"
          name="plusone_Name"
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
        <label htmlFor="event_id">Event Id:</label>
        <input
          id="event_id"
          type="text"
          name="event_id"
          value={guest.event_id}
          onChange={handleChange}
        />
        <label htmlFor="groupNumber">Group Number:</label>
        <input
          id="groupNumber"
          type="text"
          name="groupNumber"
          value={guest.groupNumber}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
