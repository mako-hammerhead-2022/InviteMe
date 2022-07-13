const request = require('superagent')
const url = '/api/v1/inviteme'
const guestlistUrl = '/api/v1/inviteme/guestlist'

export function addNewGuest(newGuest) {
  return request
    .post(url)
    .send(newGuest)
    .set('Accept', 'application/json')
    .then((res) => res.body)
    .catch((err) => {
      console.err(err.message)
    })
}

export function getAllGuests() {
  return request
    .get(guestlistUrl)
    .then((res) => res.body)
    .catch((err) => {
      console.err(err.message)
    })
}

export function deleteGuestApi(id) {
  return request
    .delete(guestlistUrl)
    .send({ id })
    .set('Accept', 'application/json')
    .then((res) => res.body)
    .catch((err) => {
      console.err(err.message)
    })
}

export function updateGuest(guest) {
  return request
    .patch(guestlistUrl)
    .send(guest)
    .set('Accept', 'application/json')
    .then((res) => res.body)
    .catch((err) => {
      console.err(err.message)
    })
}
