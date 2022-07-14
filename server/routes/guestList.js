const express = require('express')
const db = require('../db/db')
const router = express.Router()

//GET guestlist /api/v1/guestlist
router.get('/guestlist', (req, res) => {
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

//delete api/v1/guestlist/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params

  db.deleteGuest(id)
    .then((guest) => {
      res.json(guest)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//POST add a guest api/v1/guestlist
router.post('/', async (req, res) => {
  const { name, email, plusone, plusone_Name, dietary, rsvp } = req.body
  try {
    const newGuest = await db.addGuest(
      name,
      email,
      plusone,
      plusone_Name,
      dietary,
      rsvp
    )
    res.status(200).json(newGuest)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

//UPDATE guest api/v1/guestlist
router.patch('/', (req, res) => {
  const id = req.params.id
  const guest = req.body

  db.updateGuest(id, guest)
    .then((guest) => {
      guest.id = id
      res.json(guest)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Something went wrong!')
    })
})

module.exports = router
