import React from 'react'
import GuestForm from './GuestForm'
import Navbar from './Navbar'
import SeatingPlan from './SeatingPlan'
// import { Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <GuestForm />
        <SeatingPlan />

        {/* <Router>
          <Routes>
            <Route path="/" element={<GuestForm />} />
            <Route path="/" element={<SeatingPlan />} />
          </Routes>
        </Router> */}
      </div>
    </>
  )
}

export default App
