const express = require('express')
const db = require('../db/db')
const router = express.Router()

//GET all guests /api/v1
router.get('/', (req, res) => {
  db.getGuests()
    .then((guests) => {
      res.json(guests)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//POST add a guest api/v1
router.post('/', async (req, res) => {
  const { name, email } = req.body
  try {
    const newGuest = await db.addGuest(name, email)
    res.status(200).json(newGuest)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

//GET single guest /api/v1/:id
// router.get('/:id', (req, res) => {
//   db.getGuests()
//     .then((results) => {
//       res.json({ guest: results.map((guest) => guest.name) })
//       return null
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

// router.get('/', (req, res) => {

// })

module.exports = router
