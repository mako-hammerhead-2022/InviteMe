import React from 'react'

import GuestForm from './GuestForm'
import SeatingPlan from './SeatingPlan'

function App() {
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
