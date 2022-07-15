const express = require('express')
const path = require('path')

const guestRoute = require('./routes/guestRoute')
const guestListRoute = require('./routes/guestList')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/guests', guestRoute)
server.use('/api/v1/guestlist', guestListRoute)

module.exports = server
