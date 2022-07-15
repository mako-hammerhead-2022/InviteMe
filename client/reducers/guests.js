import { RECEIVE_GUESTS, DELETE_GUEST_SUCCESS } from '../actions'

const initialState = []

const guestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GUESTS:
      return action.guests
<<<<<<< container
=======
    case DELETE_GUEST_SUCCESS:
      return state.filter((guest) => guest.id !== action.id)
>>>>>>> main

    default:
      return state
  }
}

export default guestsReducer
