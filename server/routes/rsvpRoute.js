const express = require('express')
const db = require('../db/db')
const router = express.Router()

//GET all guests /api/v1/rsvp
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

//delete guest/ api/v1/rsvp
router.delete('/', (req, res) => {
  const { id } = req.body

  db.deleteGuest(id)
    .then((guest) => {
      res.json(guest)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//POST add a guest api/v1/rsvp
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

//GET single guest /api/v1/rsvp/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.findGuestById(id)
    .then((guest) => {
      res.json(guest)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//UPDATE single guest /api/v1/rsvp/:id
router.patch('/:id', (req, res) => {
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

//UPDATE single guest /api/v1/rsvp/:id
// router.patch('/:id', (req, res) => {
//   const id = Number(req.body.params)
//   const { name, email, plusone, plusoneName, dietary, rsvp } = req.body
//   db.updateGuestById(id, { name, email, plusone, plusoneName, dietary, rsvp })
//     .then((updatedGuest) => {
//       res.json(updatedGuest)
//       return null
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

module.exports = router
