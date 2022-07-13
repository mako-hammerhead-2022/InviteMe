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

export const addGuest = (newGuest) => {
  return (dispatch) => {
    return addNewGuest(newGuest)
      .then((guests) => dispatch(receiveGuests(guests)))
      .catch((err) => dispatch(setError(err.message)))
  }
}
