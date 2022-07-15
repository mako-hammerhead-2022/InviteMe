import React, { useEffect } from 'react'
import Guest from './Guest'

import { useSelector, useDispatch } from 'react-redux'
import { fetchGuests } from '../actions'

import { sendEmails } from '../apis'

// const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//   service: 'hotmail',
//   auth: {
//     user: 'invitemetesting@outlook.com',
//     pass: 'DevAcademy1',
//   },
// })

// const options = {
//   from: 'invitemetesting@outlook.com',
//   to: 'invitemetesting@outlook.com',
//   subject: 'another test email',
//   text: 'this is a dev test email',
// }

// transporter.sendMail(options, function (err, info) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('sent: ' + info.response)
// })

export default function GuestList() {
  const guests = useSelector((state) => state.guests)
  const dispatch = useDispatch()
  // const options = {
  //   from: 'invitemetesting@outlook.com',
  //   to: [],
  //   subject: 'another test email',
  //   text: 'this is a dev test email',
  // }

  useEffect(() => {
    dispatch(fetchGuests())
  }, [])

  const handleSubmit = (e) => {
    // [{email: '', name: '', id: ''}]
    const recipients = guests.map((guest) => ({
      email: guest.email,
      id: guest.id,
    }))
    e.preventDefault()
    sendEmails(recipients)
    console.log('button clicked')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {guests.map((guest) => {
            console.log(guest.email)
            return <Guest key={guest.id} guestInfo={guest} />
          })}
        </div>
        <button type="submit">Send Invite</button>
      </form>
    </>
  )
}
