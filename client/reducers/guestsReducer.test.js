import guestsReducer from './guests'
import { receiveGuests, RECEIVE_GUESTS, setGuest } from '../actions'
import { guestsArray } from '../../tests/fake-data'

describe('guestsReducer', () => {
  const guests = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'sally' },
  ]
  it('can add guests', () => {
    const action = receiveGuests(guests)
    const initialState = {
      data: [],
    }
    const expectedOutputState = {
      data: guests,
    }
    const actualOutputState = { data: guestsReducer(initialState, action) }
    expect(actualOutputState).toEqual(expectedOutputState)
  })

  it('should return the initial state', () => {
    const initialState = []
    expect(guestsReducer(undefined, [])).toEqual(initialState)
  })

  it('should receive guests data', () => {
    const initialState = guestsArray
    const action = RECEIVE_GUESTS
    const newState = guestsReducer(initialState, action)
    expect(newState.guests).toEqual(action.payload)
  })

  it('sets guests data', () => {
    const oldState = { id: 1, name: 'beyond' }
    const action = { id: 1, name: 'ayoung' }
    const newState = setGuest(oldState, action)
    expect(newState.guests).toEqual(action.payload)
  })
})
