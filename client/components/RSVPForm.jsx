import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateGuest } from '../actions'

export default function RSVPForm() {
  const dispatch = useDispatch()
  const initialState = {
    name: '',
    email: '',
    rsvp: '',
    plusone: '',
    plusone_Name: '',
    dietary: '',
    event_id: '',
    tableNumber: '',
  }
  const [guestData, setGuestData] = useState(initialState)

  //api function fetches data from db
  //or passing via reducts

  //useeffect to call single user db api
  //useparams to get id

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(updateGuest(guestData))
    setGuestData(initialState)
  }

  const handleChange = (evt) => {
    const key = evt.target.name
    const value = evt.target.value
    let prev = { ...guestData }
    prev[key] = value
    setGuestData(prev)
    console.log(value)
  }

  return (
    <div className="rsvpform">
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
        <input type="radio" id="yes" name="rsvp" value={guestData.true} />
        <label htmlFor="yes">YEAAA</label>
        <br></br>
        <input type="radio" id="no" name="rsvp" value={guestData.false} />
        <label htmlFor="no">NAAAH</label>
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
          <label htmlFor="plusone_Name">Full Name of Your Plus One</label>
        </p>
        <input
          placeholder="i.e. Reese Witherspoon"
          id="plusone_Name"
          type="text"
          name="plusone_Name"
          value={guestData.plusone_Name}
          onChange={(evt) => handleChange(evt)}
        />
        <p>
          <label htmlFor="dietary">Dietary Restrictions</label>
        </p>
        <input
          placeholder="i.e. I only eat meat"
          id="dietary"
          type="text"
          name="dietary"
          value={guestData.dietary}
          onChange={(evt) => handleChange(evt)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
