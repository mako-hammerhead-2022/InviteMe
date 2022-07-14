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

//delete guest/ api/guest
router.delete('/:id', (req, res) =>{
  const id = req.params.id
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
router.post('/', async (req, res) => {
  const { name, email } = req.body
  try {
    const newGuest = await db.addGuest(name, email)
    res.status(200).json(newGuest)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// PATCH guest api/v1
router.patch('/:id', (req, res) =>{
   const id = req.params.id
   const guest = req.body 

   db.patchGuest(id, guest) 
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
