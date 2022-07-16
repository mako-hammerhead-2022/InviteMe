import nock from 'nock'
import { getAllGuests } from './index'
import { guestsArray } from '../../tests/fake-data'

describe('getAllGuests', () => {
  test('return a list of all guests', () => {
    const scope = nock('http://localhost')
      .persist()
      .get('/api/v1/guests/')
      .reply(200, guestsArray)

    return getAllGuests().then((guests) => {
      expect(guests).toHaveLength(5)
      expect(guests).toEqual(guestsArray)
      expect(guestsArray[0].id).toBe('1')
      expect(Object.keys(guestsArray[0])).toHaveLength(9)
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})
