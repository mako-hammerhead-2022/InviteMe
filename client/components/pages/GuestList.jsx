import React from 'react'
import Guest from '../Guest'

export default function GuestList() {
  return (
    <div>
      <Guest />
      <h1>GuestList</h1>

      <h3>Name:</h3>
      <h3>Email:</h3>
      <h3>RSVP:</h3>
      <h3>Plus One:</h3>
      <h3>Dietary Restrictions:</h3>

      <button>SEND INVITE</button>
      <button>ADD GUEST</button>
    </div>
  )
}
