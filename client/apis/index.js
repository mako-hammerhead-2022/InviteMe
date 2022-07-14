const request = require('superagent')
const url = '/api/v1/guests'
const guestlistUrl = '/api/v1/inviteme/guestlist'

export function getAllGuests() {
  return request.get('/api/v1/guests').then((res) => res.body)
}

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

export function updateGuestApi(updatedGuest) {
  return request
    .patch(guestlistUrl)
    .send(updatedGuest)
    .set('Accept', 'application/json')
    .then((res) => res.body)
    .catch((err) => {
      console.err(err.message)
    })
}
