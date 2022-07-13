export const RECEIVE_GUESTS = 'RECEIVE_GUESTS'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'

import {
  getAllGuests,
  deleteGuestApi,
  addNewGuest,
  updateGuestApi,
} from '../apis'

export const fetchGuests = () => {
  return (dispatch) => {
    dispatch(setLoading())
    return getAllGuests()
      .then((guests) => dispatch(receiveGuests(guests)))
      .catch((err) => dispatch(setError(err.message)))
  }
}

export const receiveGuests = (guests) => {
  return {
    type: RECEIVE_GUESTS,
    guests,
  }
}

export const setError = (errMessage) => {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

export const addGuest = (newGuest) => {
  return (dispatch) => {
    return addNewGuest(newGuest)
      .then((guests) => dispatch(receiveGuests(guests)))
      .catch((err) => dispatch(setError(err.message)))
  }
}

export const deleteGuest = (id) => {
  return (dispatch) => {
    return deleteGuestApi(id)
      .then((guests) => dispatch(receiveGuests(guests)))
      .catch((err) => dispatch(setError(err.message)))
  }
}

export const updateGuest = (updatedGuest) => {
  return (dispatch) => {
    return updateGuestApi(updatedGuest)
      .then((guests) => dispatch(receiveGuests(guests)))
      .catch((err) => dispatch(setError(err.message)))
  }
}
