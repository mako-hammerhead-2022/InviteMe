import React from 'react'
// import { useDispatch } from 'react-redux'
// import { deleteGuest } from '../actions'

export default function Guest() {
  // const guest = props.name
  // const dispatch = useDispatch()
  // const [newGuest, setNewGuest] = useState('')

  // const handleDelete = () => {
  //   // e.preventDefault()
  //   dispatch(deleteGuest(guest))
  // }

  // const handleUpdate = () => {
  //   // e.preventDefault()
  //   dispatch(updateGuest(guest, newGuest))
  //   setNewGuest('')
  // }

  return (
    <div>
      {/* {guest} */}
      <h1>this is the guest component</h1>
      <button type="submit">delete</button>

      {/* <input
        type="text"
        value={guest}
        onChange={(e) => setNewGuest(e.target.value)}
      />
      <button type="submit" onClick={handleUpdate}>
        Update
      </button> */}
    </div>
  )
}
