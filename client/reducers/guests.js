import {
  RECEIVE_GUESTS,
  ADD_GUEST,
  SET_GUEST,
  ADD_GUESTS_SUCCESS,
  UPDATE_GROUPNUMBER,
} from '../actions'

const initialState = []

const guestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GUESTS:
      return action.guests
    case ADD_GUESTS_SUCCESS:
      return [...state, action.guests]
    case ADD_GUEST:
      return [...state, action.payload]
    case SET_GUEST:
      return action.payload
    //make another case for updating a guest table number
    case UPDATE_GROUPNUMBER:
      return state.map((guest) =>
        guest.groupNumber === action.payload.oldNumber
          ? action.payload.newNumber
          : guest
      )
    default:
      return state
  }
}

export default guestsReducer
