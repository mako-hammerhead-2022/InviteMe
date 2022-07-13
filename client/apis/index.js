const request = require('superagent')
const url = '/api/v1/inviteme'

export function getAllGuests() {
  return request
    .get(url)
    .then((res) => res.body)
    .catch((err) => {
      console.err(err.message)
    })
}

export function deleteGuestApi(id) {
  return request
    .delete(url)
    .send({ id })
    .set('Accept', 'application/json')
    .then((res) => res.body)
    .catch((err) => {
      console.err(err.message)
    })
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
