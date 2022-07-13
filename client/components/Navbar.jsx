import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="top">
      <div className="topRight">
        <ul className="topList">
          <Link to="/">
            <li className="topListItem">RSVP</li>
          </Link>
          <Link to="/seatingplan">
            <li className="topListItem">SEATING PLAN</li>
          </Link>
          <Link to="/guestlist">
            <li className="topListItem">GUEST LIST</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
