// const connection = require('./connection')

// const config = require('./knexfile')
// const knex = require('knex')
// const connection = knex(config.development)
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getGuests() {
  return db('guest').select()
}

function addGuest(name, email) {
  return db('guest').insert({ name, email })
}

function deleteGuest(id) {
  return db('guest').del().where('id', id)
}

// function guest(id, db = connection) {
//   return db('guest').select().where('id', id)
// }

// function patchGuest(id, updatedPost, db = connection) {
//   return db('guest').patch(updatedPost).where('id', id)
// }

module.exports = {
  addGuest,
  getGuests,
  deleteGuest,
  db,
}
