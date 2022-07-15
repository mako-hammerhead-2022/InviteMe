export const RECEIVE_GUESTS = 'RECEIVE_GUESTS'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'
export const ADD_GUESTS_SUCCESS = 'ADD_GUESTS_SUCCESS'

import {
  getAllGuests,
  deleteGuestApi,
  addNewGuest,
  updateGuestApi,
} from '../apis'

export const fetchGuests = () => {
  return (dispatch) => {
    dispatch(setLoading())
    return getAllGuests().then((guests) => dispatch(receiveGuests(guests)))
    // .then((guests) => console.log(guests))
    // .catch((err) => dispatch(setError(err.message)))
  }
}

export const receiveGuests = (guests) => {
  return {
    type: RECEIVE_GUESTS,
    guests,
  }
}
export const addGuestsSuccess = (guests) => {
  return {
    type: ADD_GUESTS_SUCCESS,
    guests,
  }
}

// export const setError = (errMessage) => {
//   return {
//     type: SET_ERROR,
//     errMessage,
//   }
// }

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

// export const DEL_GUEST = 'DEL_GUEST'
// export function deleteGuestAction(guest) {
//   return {
//     type: DEL_GUEST,
//     payload: guest,
//   }
// }
export const deleteGuest = (id) => {
  return (dispatch) => {
    return deleteGuestApi(id).then(() => dispatch(fetchGuests()))
    // .catch((err) => dispatch(setError(err.message)))
  }
}

export const addGuest = (newGuest) => {
  return (dispatch) => {
    return addNewGuest(newGuest).then((guests) =>
      dispatch(receiveGuests(guests))
    )
    // .catch((err) => dispatch(setError(err.message)))
  }
}

export const updateGuest = (updatedGuest) => {
  return (dispatch) => {
    return updateGuestApi(updatedGuest).then((guests) =>
      dispatch(receiveGuests(guests))
    )
    // .catch((err) => dispatch(setError(err.message)))
  }
}
