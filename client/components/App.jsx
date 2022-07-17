import React from 'react'
import RSVPForm from './RSVPForm'
import Navbar from './Navbar'
import GuestList from './GuestList'
import SeatingPlan from './SeatingPlan'
import LoginPage from './LoginPage'
import NoMatch from './NoMatch'
import MainLayout from './MainLayout.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route element={<MainLayout />}>
              <Route exact path="/" element={<GuestList />} />
              <Route exact path="/rsvp/:id" element={<RSVPForm />} />
              <Route exact path="/seatingplan" element={<SeatingPlan />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
