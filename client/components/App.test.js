import '@testing-library/jest-dom'
import guests from '../reducers'
import { setGuest, updateGuest } from '../actions/index.js'
import { updateRsvpGuest } from '../apis'

describe('guests reducer', () => {
  it('sets guests data', () => {
    const oldState = ['david']
    const action = setGuest(['beyond'])
    const newState = guests(oldState, action)
    expect(newState.guests).toEqual(action.payload)
  })

  // it('updates guests data', () => {
  //   const oldState = [
  //     { id: 1, name: 'david' },
  //     { id: 2, name: 'beyond' },
  //   ]
  //   const action = updateGuest([{ id: 2, name: 'ayoung' }])
  //   const newState = guests(oldState, action)
  //   expect(newState[0].name).toBe('david')
  //   expect(newState[1].name).toBe('ayoung')
  //   expect(newState.name).toHaveLength(2)
  // })
})
