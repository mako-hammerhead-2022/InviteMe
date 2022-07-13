const connection = require('./connection')

function guest(id, db = connection) {
  return db('guest').select(id, 'guest.id')
}

function getGuests(db = connection) {
  return db('guest').select()
}

function patchGuest(id, updatedPost, db = connection) {
  return db('guest').patch(updatedPost).where('id', id)
}

function deleteGuest(id, db = connection) {
  return db('guest').del().where('id', id)
}

module.exports = {
  guest,
  getGuests,
  patchGuest,
  deleteGuest
  }
