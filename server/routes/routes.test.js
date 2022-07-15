//const routes = require('./guestRoute')

const knex = require('knex')
const testConfig = require('../db/knexfile').test // Test Database
const testRoutes = knex(testConfig)
const db = require('../db/db')

beforeAll(() => {
  return testRoutes.migrate.latest()
})

beforeEach(async () => {
  return testRoutes.seed.run()
})

afterAll(() => {
  return testRoutes.destroy()
})

describe('test routes', () => {
  it('tests the router.get', () => {
    expect.assertions(2)
    return db.getGuests(testRoutes).then((result) => {
      expect(result[0].name).toBe('Ayoung')
      expect(result).toHaveLength(5)
    })
  })
  it('tests the router.delete', () => {
    expect.assertions(2)
    return db
      .deleteGuest(1, testRoutes)
      .then(() => {
        return db.getGuests(testRoutes)
      })
      .then((result) => {
        expect(result[0].name).toBe('Beyond')
        expect(result).toHaveLength(4)
      })
  })
  it('tests the router.post', () => {
    const addGuest = [
      'Benjamin',
      'ben@devacademy.co.nz',
      true,
      'Savannah',
      'Dairy products',
      true,
      6,
      7,
    ]
    expect.assertions(2)
    return db
      .addGuest(...addGuest, testRoutes)
      .then(() => {
        return db.getGuests(testRoutes)
      })
      .then((result) => {
        expect(result[5].name).toBe('Benjamin')
        expect(result).toHaveLength(6)
      })
  })
  it('test the updateGuest', () => {
    expect.assertions(2)
    const patchGuest = {
      name: 'Angela',
    }
    return db
      .patchGuest(3, patchGuest, testRoutes) // 1: update data user name: 'Angela
      .then(() => {
        return db.getGuests(testRoutes) // 2: receive all guests
      })
      .then((result) => {
        // 3: access the returned guests
        expect(result[2].name).toBe('Angela')
        expect(result).toHaveLength(5)
      })
  })
})