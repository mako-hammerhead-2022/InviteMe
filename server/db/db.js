const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getGuests(db = connection) {
  return db('guest').select()
}

function addGuest(
  { name, email, plusone, plusone_Name, dietary, rsvp, event_id, table_Number },
  db = connection
) {
  return db('guest').insert({
    name,
    email,
    plusone,
    plusone_Name,
    dietary,
    rsvp,
    event_id,
    table_Number,
  })
}

function deleteGuest(id, db = connection) {
  return db('guest').del().where('id', id)
  // .then(() => getGuests())
}

// function guest(id, db = connection) {
//   return db('guest').select().where('id', id)
// }

function patchGuest(id, updatedGuest, db = connection) {
  return db('guest').update(updatedGuest).where('id', id)
}

module.exports = {
  addGuest,
  getGuests,
  deleteGuest,
  patchGuest,
}
