import guestsReducer from './guests'
import { addGuest } from '../actions'

describe('guests reducer', () => {
  test('add a new guest', () => {
    const action = addGuest('Wallace')
    const newState = guestsReducer(['Sally', 'Harry'], action)
    expect.assertions(1)
    expect(newState[2]).toBe('Wallace')
    expect(newState).toHaveLength(3)
    console.log(newState)
  })
})
