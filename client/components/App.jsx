import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import GuestForm from './GuestForm'

import SeatingPlan from './SeatingPlan'

function App() {
  // const fruits = useSelector((state) => state.fruits)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  return (
    <>
      <div className="app">
        <h1>You are invited to the wedding!</h1>
        <SeatingPlan />

        <GuestForm />
      </div>
    </>
  )
}

export default App
