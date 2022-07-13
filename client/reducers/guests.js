import { RECEIVE_GUESTS } from '../actions'

const initialState = []

const guestsReducer = (state = initialState, action) => {
  switch (action) {
    case RECEIVE_GUESTS:
      return action.movies

    default:
      return state
  }
}

export default guestsReducer
