import React from 'react'
import RSVPForm from './RSVPForm'
import Navbar from './Navbar'
import GuestList from './GuestList'
import SeatingPlan from './SeatingPlan'
import LoginPage from './LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<GuestList />} />
            <Route path="/rsvp/:id" element={<RSVPForm />} />
            <Route path="/seatingplan" element={<SeatingPlan />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
