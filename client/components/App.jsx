import React from 'react'

import RSVPForm from './RSVPForm'
import Navbar from './Navbar'
import GuestList from './GuestList'
import SeatingPlan from './SeatingPlan'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/guestlist" element={<GuestList />} />
            <Route path="/" element={<RSVPForm />} />
            {/* <Route path="/seatingplan" element={<SeatingPlan />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
