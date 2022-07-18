import '@testing-library/jest-dom'
import guests from '../reducers'
import { setGuest } from '../actions/index.js'

describe('guests reducer', () => {
  it('sets guests data', () => {
    const oldState = ['david']
    const action = setGuest(['ayoung'])
    const newState = guests(oldState, action)
    expect(newState.guests).toEqual(action.payload)
  })
})
