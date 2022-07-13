const express = require('express')
const db = require('../db/fruits')
const router = express.Router()


router.get('/', (req, res) => {
  db.guest().then((guest) => {
    res.json(guest)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  })
})

router.get('/', (req, res) => {
  db.getGuests()
    .then((results) => {
      res.json({ guest: results.map((guest) => guest.name) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// router.get('/', (req, res) => {

// })


module.exports = router

