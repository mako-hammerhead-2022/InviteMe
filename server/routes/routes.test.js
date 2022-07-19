const request = require('supertest')
const db = require('../db/db')
const server = require('../server')

jest.mock('../db/db.js')

const guestMock = [
  {
    id: '10',
    name: 'Ben',
    email: 'ben@gmail.com',
    plusone: true,
    plusone_Name: 'Tom',
    dietary: 'N/A',
    rsvp: true,
    event_id: 1,
    groupNumber: 2,
  },
  {
    id: '9',
    name: 'bob',
    email: 'bobbie@hotmail.com',
    plusone: true,
    plusone_Name: 'ben',
    dietary: 'fish',
    rsvp: false,
    event_id: 1,
    groupNumber: 2,
  },
]
// using mock to test so we don't need to update tests everytime db changes.
describe('mock route data', () => {
  test('GET /api/v1/guests', () => {
    expect.assertions(2)
    db.getGuests.mockImplementation(() => Promise.resolve(guestMock))
    return request(server)
      .get('/api/v1/guests')
      .expect(200)
      .then((res) => {
        expect(res.body).toStrictEqual(guestMock) // wanting to return my fake data here.. toBeStrickEqual, wants it to be the identicale
        expect(res.body).toHaveLength(2)
      })
  })

  test('POST route test', () => {
    // You don't need to mock the below, even though it is the information you 
    // might pass to the addGuest db function. We are testing the route
    // So we only care what gets returned from the db function
    // const addGuest = {
    //   name: 'Benjamin',
    //   email: 'ben@devacademy.co.nz',
    //   plusone:  true,
    //   plusone_name: 'Savannah',
    //   dietary: 'Dairy products',
    //   rsvp: true,
    //   event_id: 6,
    //   groupNumber: 7,
    // }
    expect.assertions(2)
    // What we do want to mock is what will be returned (Promise.resolve)
    // knex INSERT functions just return the newly generated id of the added item
    // We're using 5 here, because your seed data's last id is 4
    db.addGuest.mockImplementation(() => Promise.resolve(5))
    // from the server, we request the route we want - you had it as 
    // get, but we want to test the post route here.
    return request(server)
      .post('/api/v1/guests')
      // .expect(200)
      .then((result) => {
        // Just to demo what comes back...
        // console.log the full result if you are curious
        // It's a big objedt with keys including text, status, etc.
        console.log("result", result.text)
        // Status code 200 means things went as expected
        expect(result.status).toBe(200)
        // and we're getting back the id we expect
        expect(result.text).toContain('5')
      })
  })
})
