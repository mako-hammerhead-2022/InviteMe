const request = require('superagent')

const guestlistUrl = '/api/v1/guests/'

export function getAllGuests() {
  return request.get('/api/v1/guests/').then((res) => res.body)
}

export function deleteGuestApi(id) {
  return request
    .del('/api/v1/guests/')
    .send({ id })
    .set('Accept', 'application/json')
    .then((res) => res.body)
    .catch((err) => {
      console.err(err.message)
    })
}

export function addNewGuest(newGuest) {
  console.log('This is returning from apiClient', newGuest)
  return request
    .post(guestlistUrl)
    .send(newGuest)
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
