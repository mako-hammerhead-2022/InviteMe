import { SET_ERROR } from '../actions'

const initialState = null

const errReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.errMessage
    default:
      return state
  }
}

export default errReducer
