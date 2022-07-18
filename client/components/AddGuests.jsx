import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGuests, addGuest } from '../actions'
import { Input, Select, Button, Text } from '@chakra-ui/react'
;<link
  href="https://fonts.googleapis.com/css?family=Montserrat:300,700|Playfair+Display:400i"
  rel="stylesheet"
></link>

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
    // console.log('Submit btn was clicked!!')
    dispatch(addGuest(guest))
    setGuest(initialState)
    dispatch(fetchGuests())
  }

  useEffect(() => {
    dispatch(fetchGuests)
  }, [])

  return (
    <>
      <Text color="white" fontSize="6xl" fontWeight="extrabold">
        Invite your friends and family!
      </Text>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <Text fontSize="2xl" fontWeight="bold" color="#9B9A94">
            Guest Name:
          </Text>
        </label>
        <Input
          id="name"
          type="text"
          name="name"
          value={guest.name}
          onChange={handleChange}
          placeholder="Basic usage"
        />
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          type="text"
          name="email"
          value={guest.email}
          onChange={handleChange}
        />
        <p>
          <label htmlFor="rsvp">Are you coming?</label>
        </p>
        <Select
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
        </Select>
        <p>
          <label htmlFor="plusone">Would you like to bring a plus one?</label>
        </p>
        <Select
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
        </Select>
        <br></br>
        <br></br>
        <label htmlFor="plusone_Name">Name of Plus One:</label>
        <Input
          id="plusone_Name"
          type="text"
          name="plusone_Name"
          value={guest.plusone_Name}
          onChange={handleChange}
        />
        <label htmlFor="dietary">Dietary:</label>
        <Input
          id="dietary"
          type="text"
          name="dietary"
          value={guest.dietary}
          onChange={handleChange}
        />
        <label htmlFor="event_id">Event Id:</label>
        <Input
          id="event_id"
          type="text"
          name="event_id"
          value={guest.event_id}
          onChange={handleChange}
        />
        <label htmlFor="groupNumber">Group Number:</label>
        <Input
          id="groupNumber"
          type="text"
          name="groupNumber"
          value={guest.groupNumber}
          onChange={handleChange}
        />
        <Button type="submit" colorScheme="teal" variant="outline">
          Submit
        </Button>
      </form>
    </>
  )
}
