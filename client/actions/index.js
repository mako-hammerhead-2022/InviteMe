export const RECEIVE_GUESTS = 'RECEIVE_GUESTS'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'

export const DELETE_GUEST_PENDING = 'DELETE_GUEST_PENDING'
export const DELETE_GUEST_SUCCESS = 'DELETE_GUEST_SUCCESS'

import {
  getAllGuests,
  deleteGuestApi,
  addNewGuest,
  updateGuestApi,
} from '../apis'

export const fetchGuests = () => {
  return (dispatch) => {
    dispatch(setLoading())
    return (
      getAllGuests()
        .then((guests) => dispatch(receiveGuests(guests)))
        // .then((guests) => console.log(guests))
        .catch((err) => dispatch(setError(err.message)))
    )
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

export function deleteGuestPending() {
  return {
    type: DELETE_GUEST_PENDING,
  }
}

export function deleteGuestSuccess(id) {
  return {
    type: DELETE_GUEST_SUCCESS,
    id,
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
      .then(() => dispatch(deleteGuestSuccess(id)))
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
