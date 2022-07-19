import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateGuest } from '../actions'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import request from 'superagent'
import { Input, Select, Button, Text, Box, Center } from '@chakra-ui/react'

async function getGuestByEmail(email) {
  return request.get(`/api/v1/guests/by-email/${email}`).then((res) => res.body)
}

const initialState = {
  name: '',
  email: '',
  rsvp: '0',
  plusone: '0',
  plusone_Name: '',
  dietary: '',
  event_id: '',
  groupNumber: '',
}

export default function RSVPForm() {
  const [guest, setGuest] = useState(initialState)
  const { isAuthenticated, isLoading, user } = useAuth0()
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        checkUser()
      } else {
        localStorage.setItem('redirect_url', `/rsvp/${id}`)
        navigate(`/login`)
      }
    }

    async function checkUser() {
      const guest = await getGuestByEmail(user.email)
      if (guest.id !== Number(id)) {
        navigate('*')
      } else {
        console.log(guest)
        setGuest(guest)
      }
    }
  }, [isLoading, isAuthenticated, user])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(updateGuest({ id, ...guest }))

    setGuest(initialState)
    // navigate('/login')
    navigate('/logout')
  }

  const handleChange = (evt) => {
    const key = evt.target.name
    const value = evt.target.value
    let prev = { ...guest }
    prev[key] = value
    setGuest(prev)
  }

  return (
    <>
      <Box width="100%" bgColor={'white'} marginBottom="3%">
        <Center>
          <Text
            color="#403F47"
            fontSize="6xl"
            fontWeight="extrabold"
            fontFamily={'m'}
          >
            We are pleased to invite you to our wedding!
          </Text>
        </Center>
      </Box>
      <Center>
        <Text
          color="#403F47"
          fontSize="6xl"
          fontWeight="extrabold"
          fontFamily={'m'}
        >
          Please confirm your attendance below:
        </Text>
      </Center>
      <Center>
        <Box
          margin="50px"
          bgColor="#FDFDFD "
          width="40%"
          borderRadius="20pt"
          boxShadow="xl"
        >
          <Center>
            <form onSubmit={handleSubmit}>
              <label htmlFor="guestName">
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#403F47"
                  marginTop={'20px'}
                >
                  Your Full Name: 🧑
                </Text>
              </label>

              <Input
                placeholder={guest.name}
                id="name"
                type="text"
                name="name"
                value={guest.name}
                onChange={(evt) => handleChange(evt)}
                color="black"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />

              <label htmlFor="guestEmail">
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#403F47"
                  marginTop={'10px'}
                >
                  Your Email Address: 📧
                </Text>
              </label>

              <Input
                placeholder={guest.email}
                id="email"
                type="text"
                name="email"
                value={guest.email}
                onChange={(evt) => handleChange(evt)}
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />

              <label htmlFor="rsvp">
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#403F47"
                  marginTop={'10px'}
                >
                  Are you coming: ❔
                </Text>
              </label>

              <Select
                name="rsvp"
                value={guest.rsvp}
                onChange={(evt) => handleChange(evt)}
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              >
                <option name="rsvp" value="1">
                  Yeeea!
                </option>
                <option name="rsvp" value="0">
                  Yeah, but Naaah
                </option>
              </Select>

              <label htmlFor="plusone">
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#403F47"
                  marginTop={'10px'}
                >
                  Would you like to bring a plus one? 🎎
                </Text>
              </label>

              <Select
                name="plusone"
                value={guest.plusone}
                onChange={(evt) => handleChange(evt)}
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              >
                <option name="plusone" value="0">
                  No, I fly solo.
                </option>
                <option name="plusone" value="1">
                  {"Yes, I can't be alone for 5 minutes."}
                </option>
              </Select>

              <label htmlFor="plusone_Name">
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#403F47"
                  marginTop={'10px'}
                >
                  Full Name of Your Plus One: 📛
                </Text>
              </label>

              <Input
                placeholder={guest.plusone_Name}
                id="plusone_Name"
                type="text"
                name="plusone_Name"
                value={guest.plusone_Name}
                onChange={(evt) => handleChange(evt)}
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />

              <label htmlFor="dietary">
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#403F47"
                  marginTop={'10px'}
                >
                  Dietary Restrictions: 🥦
                </Text>
              </label>

              <Input
                placeholder={guest.dietary}
                id="dietary"
                type="text"
                name="dietary"
                value={guest.dietary}
                onChange={(evt) => handleChange(evt)}
                color="#777777"
                _placeholder={{ color: 'inherit' }}
                bgColor="#f8f8f8"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
              />
              <Input
                type="submit"
                value="Submit"
                color="white"
                _placeholder={{ color: 'inherit' }}
                bgGradient="linear(to-r, red.400,pink.400)"
                borderColor="#ccc"
                htmlSize={75}
                width="auto"
                size="lg"
                marginBottom={'20px'}
                marginLeft="10px"
              />
            </form>
          </Center>
        </Box>
      </Center>
      <Box marginBottom={'100%'}></Box>
      <Button opacity={'100%'} marginBottom={'100%'}>
        Easter Egg 🥚
      </Button>
    </>
  )
}
