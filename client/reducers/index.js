import { combineReducers } from 'redux'

import errReducer from './errMessage'
import loadingReducer from './loading'
import guestsReducer from './guests'

export default combineReducers({
  errMessage: errReducer,
  loading: loadingReducer,
  guests: guestsReducer,
})
