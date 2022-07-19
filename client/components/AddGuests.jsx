import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGuests, addGuest } from '../actions'
import { Input, Select, Button, Text, Box, Center } from '@chakra-ui/react'
// ;<link
//   href="https://fonts.googleapis.com/css?family=Montserrat:300,700|Playfair+Display:400i"
//   rel="stylesheet"
// ></link>

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
      <Center>
        <Text
          color="#403F47"
          fontSize="6xl"
          fontWeight="extrabold"
          fontFamily={'m'}
        >
          Invite Your Friends and Family!
        </Text>
      </Center>
      <br></br>
      <Center>
        <Box
          ml={2}
          bgColor="#FDFDFD "
          width="40%"
          borderRadius="20pt"
          boxShadow="xl"
        >
          <br></br>
          <Center>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                <Text fontSize="2xl" fontWeight="bold" color="#403F47">
                  Guest Name: 🧑
                </Text>
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                value={guest.name}
                onChange={handleChange}
                placeholder="Please fill in your name"
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />
              <br></br>
              <br></br>
              <label htmlFor="email">
                <Text fontSize="2xl" fontWeight="bold" color="#403F47">
                  Email: 📧
                </Text>
              </label>
              <Input
                id="email"
                type="text"
                name="email"
                value={guest.email}
                onChange={handleChange}
                placeholder="Please fill in your email address"
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />
              <br></br>
              <br></br>
              <p>
                <label htmlFor="rsvp">
                  <Text fontSize="2xl" fontWeight="bold" color="#403F47">
                    Are you coming? ❔
                  </Text>
                </label>
              </p>
              <Select
                name="rsvp"
                value={guest.rsvp}
                onChange={(evt) => handleChange(evt)}
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                width="25%"
                size="lg"
              >
                <option name="rsvp" value="1">
                  Yeeea!
                </option>
                <option name="rsvp" value="0">
                  Yeah, but Naaah
                </option>
              </Select>
              <br></br>
              <p>
                <label htmlFor="plusone">
                  <Text fontSize="2xl" fontWeight="bold" color="#403F47">
                    Would you like to bring a plus one? 🎎
                  </Text>
                </label>
              </p>
              <Select
                name="plusone"
                value={guest.plusone}
                onChange={(evt) => handleChange(evt)}
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                width="25%"
                size="lg"
              >
                <option name="plusone" value="0">
                  No, I fly solo.
                </option>
                <option name="plusone" value="1">
                  Yes, I can&apos;t be alone for 5 minutes.
                </option>
              </Select>
              <br></br>
              <label htmlFor="plusone_Name">
                <Text fontSize="2xl" fontWeight="bold" color="#403F47">
                  Name of Plus One: 📛
                </Text>
              </label>
              <Input
                id="plusone_Name"
                type="text"
                name="plusone_Name"
                value={guest.plusone_Name}
                onChange={handleChange}
                placeholder="Please fill in the name of your plusone"
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />
              <br></br>
              <br></br>
              <label htmlFor="dietary">
                <Text fontSize="2xl" fontWeight="bold" color="#403F47">
                  Dietary: 🥦
                </Text>
              </label>
              <Input
                id="dietary"
                type="text"
                name="dietary"
                value={guest.dietary}
                onChange={handleChange}
                placeholder="Please fill in your dietary requirements"
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />
              <br></br>
              <br></br>
              <label htmlFor="event_id">
                <Text fontSize="2xl" fontWeight="bold" color="#403F47">
                  Event ID: 🆔
                </Text>
              </label>
              <Input
                id="event_id"
                type="text"
                name="event_id"
                value={guest.event_id}
                onChange={handleChange}
                placeholder="Please fill in the event id"
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />
              <br></br>
              <br></br>
              <label htmlFor="groupNumber">
                <Text fontSize="2xl" fontWeight="bold" color="#403F47">
                  Group Number: 🔢
                </Text>
              </label>
              <Input
                id="groupNumber"
                type="text"
                name="groupNumber"
                value={guest.groupNumber}
                onChange={handleChange}
                placeholder="Please fill in your group number"
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />
              <br></br>
              <br></br>
              <Center>
                <Button
                  type="submit"
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={'white'}
                  size="lg"
                >
                  Submit
                </Button>
              </Center>

              <br></br>
              <br></br>
            </form>
          </Center>
        </Box>
      </Center>
    </>
  )
}
