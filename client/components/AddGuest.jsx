import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGuest } from '../actions'

export default function AddGuest() {
  const dispatch = useDispatch()

  const [guest, setGuest] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addGuest(guest))
    setGuest('')
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setGuest((prevState) => ({
      ...prevState, // shallow copy all previous state
      [name]: value, // update specific key/value
    }))
  }

  return (
    <div>
      <h4>Add a new guest</h4>
      <form type="submit" onSubmit={handleSubmit}>
        <label htmlFor="name">Guest Name: </label> {''}
        <input
          id="name"
          type="text"
          name="name"
          value={guest.name}
          onChange={onChange}
        />{' '}
        <br />
        <label htmlFor="email">Guest Email:</label>{' '}
        <input
          id="email"
          type="text"
          name="email"
          value={guest.email}
          onChange={onChange}
        />{' '}
        <br />
        <input type="radio" id="yes" name="rsvp" value={guest.true} />
        <label htmlFor="yes">YEAAA</label>
        <input type="radio" id="no" name="rsvp" value={guest.false} />
        <label htmlFor="no">NAAAH</label>
        <p>
          <label htmlFor="plusone">Would you like to bring a plus one?</label>
        </p>
        {/* <select name="plusone" value={guest.plusone} onChange={onChange}>
          <option name="plusone" value="false">
            No, I fly solo.
          </option>
          <option name="plusone" value="true">
            Yes, I can't be alone for 5 minutes.
          </option>
        </select> */}
        <p>
          <label htmlFor="plusone_Name">Full Name of Your Plus One</label>
        </p>
        <input
          placeholder={guest.dietary}
          id="dietary"
          type="text"
          name="dietary"
          value={guest.dietary}
          onChange={onChange}
        />{' '}
        <br />
        <input type="submit" value="Add Guest" />
      </form>
    </div>
  )
}
