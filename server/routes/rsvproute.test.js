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
  {
  id: '8',
  name: 'Masi',
  email: 'Masi@hotmail.com',
  plusone: false,
  plusone_Name: '',
  dietary: 'n/a',
  rsvp: false,
  event_id: 1,
  groupNumber: 2,
},
{
  id: '7',
  name: 'Mere',
  email: 'Mere@hotmail.com',
  plusone: true,
  plusone_Name: 'Vince',
  dietary: 'n/a',
  rsvp: false,
  event_id: 1,
  groupNumber: 2,
}
]
// using mock to test so we don't need to update tests everytime db changes.
describe('mock route data', () => {
  test('GET all guests /api/v1/rsvp', () => {
    expect.assertions(2)
    db.getGuests.mockImplementation(() => Promise.resolve(guestMock))
    return request(server)
      .get('/api/v1/rsvp')
      .expect(200)
      .then((res) => {
        expect(res.body).toStrictEqual(guestMock) // wanting to return my fake data here.. toBeStrickEqual, wants it to be the identicale
        expect(res.body).toHaveLength(4)
      })
  })

  test('GET single guest /api/v1/rsvp/ id:', () => {
    expect.assertions(2)
    db.getGuests.mockImplementation(() => Promise.resolve(guestMock))
    return request(server)
      .get('/api/v1/rsvp')
      .expect(200)
      .then((res) => {
      expect(res.body['Masi']).toStrictEqual(guestMock[8]) // wanting to return my fake data here.. toBeStrickEqual, wants it to be the identicale
      expect(res.body).toHaveLength(4)
      })
  })

   test('POST route test', () => {
    expect.assertions(2)
    db.addGuest.mockImplementation(() => Promise.resolve(7))
    return request(server)
      .post('/api/v1/rsvp')
      .then((result) => {
        console.log("result", result.text)
        expect(result.status).toBe(200)
        expect(result.text).toContain('7')
      })
  })
  
  it('tests the delete route', () => {
    expect.assertions(2)
    db.deleteGuest.mockImplementation(() => Promise.resolve(5))
    return request(server)
      .del('/api/v1/rsvp')   
      .then((result) => {
        console.log("result", result.text)
        expect(result.status).toBe(200)
        expect(result.text).toContain('5')
      })
  })
})