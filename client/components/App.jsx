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
<<<<<<< container
            <Route path="/" element={<GuestForm />} />
            <Route path="/seatingplan" element={<SeatingPlan />} />
=======
            <Route path="/" element={<RSVPForm />} />
            {/* <Route path="/seatingplan" element={<SeatingPlan />} /> */}
>>>>>>> main
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
