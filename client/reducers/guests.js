import { RECEIVE_GUESTS } from '../actions'

const initialState = []

const guestsReducer = (state = initialState, action) => {
  switch (action) {
    case RECEIVE_GUESTS:
      return action.guests

    default:
      return state
  }
}

export default guestsReducer
