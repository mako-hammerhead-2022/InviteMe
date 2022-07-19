import guests from '../reducers'
import { setGuest } from '../actions'

describe('setGuests reducer', () => {
  it('sets guests data', () => {
    const oldState = ['david']
    const action = setGuest(['ayoung'])
    const newState = guests(oldState, action)
    expect(newState.guests).toEqual(action.payload)
  })
})
