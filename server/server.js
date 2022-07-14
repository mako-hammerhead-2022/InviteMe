const express = require('express')
const path = require('path')

const guestRoutes = require('./routes/guestRoute')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/guests', guestRoutes)

module.exports = server
