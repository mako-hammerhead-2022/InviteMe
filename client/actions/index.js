export const RECEIVE_GUESTS = 'RECEIVE_GUESTS'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'
export const ADD_GUESTS_SUCCESS = 'ADD_GUESTS_SUCCESS'
export const ADD_GUEST = 'ADD_GUEST'
export const SET_GUEST = 'SET_GUEST'
export const UPDATE_GROUPNUMBER = 'UPDATE_GROUPNUMBER'

import {
  getAllGuests,
  deleteGuestApi,
  addNewGuest,
  updateRsvpGuest,
  getSingleGuest,
  updateGuestTable,
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

export const fetchSingleGuest = (id) => {
  return (dispatch) => {
    dispatch(setLoading())
    return (
      getSingleGuest(id)
        .then((guest) => dispatch(receiveGuests(guest)))
        // .then((guests) => console.log(guests))
        .catch((err) => dispatch(setError(err.message)))
    )
  }
}

export function addListGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest,
  }
}

//updateTableForGuest function here. similar to the addListGuest
export function updateTableforGuest(oldNumber, newNumber) {
  return {
    type: UPDATE_GROUPNUMBER,
    payload: { oldNumber, newNumber },
  }
}

export function setGuest(guest) {
  return {
    type: SET_GUEST,
    payload: guest,
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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

export const setError = (errMessage) => {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

export const deleteGuest = (id) => {
  return (dispatch) => {
    return deleteGuestApi(id)
      .then(() => dispatch(fetchGuests()))
      .catch((err) => dispatch(setError(err.message)))
  }
}

export const addGuest = (newGuest) => {
  // console.log('Returning from actions', newGuest)
  return (dispatch) => {
    return addNewGuest(newGuest)
      .then((guests) => dispatch(receiveGuests(guests)))
      .catch((err) => dispatch(setError(err.message)))
  }
}

export const updateGuest = (updatedGuest) => {
  return (dispatch) => {
    return updateRsvpGuest(updatedGuest.id, updatedGuest)
      .then(() => dispatch(fetchGuests()))
      .catch((err) => dispatch(setError(err.message)))
  }
}

//updateGuestTable - similar to updateGuest above^
export const updateTableGuest = (id, groupNumber) => {
  console.log('returning from actions', { id, groupNumber })
  return (dispatch) => {
    return updateGuestTable(id, groupNumber)
      .then(() => dispatch(fetchGuests()))
      .catch((err) => dispatch(setError(err.message)))
  }
}
