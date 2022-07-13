import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGuest } from '../actions'

export default function GuestForm() {
  const dispatch = useDispatch()
  const [guestData, setGuestData] = useState({
    name: '',
    email: '',
    rsvp: '',
    plusone: '',
    plusone_Name: '',
    dietary: '',
    event_id: '',
    tableNumber: '',
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addGuest(guestData))
    setGuestData({
      name: '',
      email: '',
      rsvp: '',
      plusone: '',
      plusone_Name: '',
      dietary: '',
      event_id: '',
      tableNumber: '',
    })
  }

  const handleChange = (evt) => {
    const key = evt.target.name
    const value = evt.target.value
    let prev = { ...guestData }
    prev[key] = value
    setGuestData(prev)
  }

  return (
    <div className="guestform">
      <h1>We are pleased to invite you to our wedding!</h1>
      <h2>Please confirm your attendance below:</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="guestName">Your Full Name</label>
        </p>
        <input
          placeholder="i.e. Jackie Chan"
          id="name"
          type="text"
          name="name"
          value={guestData.name}
          onChange={(evt) => handleChange(evt)}
        />
        <p>
          <label htmlFor="guestEmail">Your Email Address</label>
        </p>
        <input
          placeholder="i.e. jackie.chan@gmail.com"
          id="email"
          type="text"
          name="email"
          value={guestData.email}
          onChange={(evt) => handleChange(evt)}
        />
        <p>Are you coming?</p>
        <input type="radio" id="yes" name="rsvp" value={guestData.rsvp} />
        <label htmlFor="yes">YEAAA</label>
        <br></br>
        <input type="radio" id="no" name="rsvp" value={guestData.rsvp} />
        <label htmlFor="yes">NAAAH</label>
        <p>
          <label htmlFor="plusone">Would you like to bring a plus one?</label>
        </p>
        <select
          name="plusone"
          value={guestData.plousone}
          onChange={(evt) => handleChange(evt)}
        >
          <option name="plusone" value="false">
            No, I fly solo.
          </option>
          <option name="plusone" value="true">
            Yes, I can't be alone for 5 minutes.
          </option>
        </select>
        <p>
          <label htmlFor="plusoneName">Full Name of Your Plus One</label>
        </p>
        <input
          placeholder="i.e. Reese Witherspoon"
          id="plusoneName"
          type="text"
          name="plusoneName"
          value={guestData.plusone_Name}
          onChange={(evt) => handleChange(evt)}
        />
        <p>
          <label htmlFor="diet">Dietary Restrictions</label>
        </p>
        <input
          placeholder="i.e. I only eat meat"
          id="diet"
          type="text"
          name="diet"
          value={guestData.dietary}
          onChange={(evt) => handleChange(evt)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
