import guestsReducer from './guests'
import { receiveGuests } from '../actions'

describe('guestsReducer', () => {
  const guests = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'sally' },
  ]
  it('can get guests by user id', () => {
    // Arrange

    const action = receiveGuests(guests)
    const initialState = {
      data: [],
    }
    const expectedOutputState = {
      data: guests,
    }
    // Act
    const actualOutputState = { data: guestsReducer(initialState, action) }

    // Assert
    expect(actualOutputState).toEqual(expectedOutputState)
  })
})
