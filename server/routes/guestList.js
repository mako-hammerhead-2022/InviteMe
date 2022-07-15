const express = require('express')
const db = require('../db/db')
const router = express.Router()
const { sendEmail } = require('../emailTest')

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

router.post('/send-invites', (req, res) => {
  const { recipients } = req.body
  sendEmail(recipients[0])
    .then((info) => {
      console.log(info)
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})
//delete api/v1/guestlist
router.delete('/:id', (req, res) => {
  const id = req.params.id
  // const id = req.body.id
  const guest = req.body

  db.deleteGuest(id, guest)
    .then((guest) => {
      guest.id = id
      res.json(guest)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//POST add a guest api/v1
// router.post('/', async (req, res) => {
//   const { name, email, plusone, plusone_Name, dietary, rsvp } = req.body
//   try {
//     const newGuest = await db.addGuest(
//       name,
//       email,
//       plusone,
//       plusone_Name,
//       dietary,
//       rsvp
//     )
//     res.status(200).json(newGuest)
//   } catch (err) {
//     res.status(400).json({ error: err.message })
//   }
// })

// PATCH guest api/v1
// router.patch('/:id', (req, res) => {
//   const id = req.params.id
//   const guest = req.body

//   db.patchGuest(id, guest)
//     .then((guest) => {
//       guest.id = id
//       res.json(guest)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Something went wrong!')
//     })
// })

module.exports = router
