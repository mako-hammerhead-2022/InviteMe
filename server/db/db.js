const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getGuests() {
  return db('guest').select()
}

function addGuest(name, email, plusone, plusone_Name, dietary, rsvp) {
  return db('guest').insert({
    name,
    email,
    plusone,
    plusone_Name,
    dietary,
    rsvp,
  })
}

function deleteGuest(id) {
  return db('guest')
    .del()
    .where('id', id)
    .then(() => getGuests())
}

// function guest(id, db = connection) {
//   return db('guest').select().where('id', id)
// }

function patchGuest(id, updatedGuest) {
  return db('guest').update(updatedGuest).where('id', id)
}

module.exports = {
  addGuest,
  getGuests,
  deleteGuest,
  patchGuest,
}
