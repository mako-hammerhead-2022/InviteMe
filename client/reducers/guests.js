import { RECEIVE_GUESTS, ADD_GUESTS_SUCCESS } from '../actions'

const initialState = []

const guestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GUESTS:
      return action.guests

    case ADD_GUESTS_SUCCESS:
      return [...state, action.guests]

    default:
      return state
  }
}

export default guestsReducer
