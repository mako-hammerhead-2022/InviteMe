const express = require('express')
const path = require('path')

const guestRoute = require('./routes/guestRoute')
const rsvpRoute = require('./routes/rsvpRoute')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/guests', guestRoute)
server.use('/api/v1/rsvp', rsvpRoute)

module.exports = server
