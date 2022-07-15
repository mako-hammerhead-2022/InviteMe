import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="top">
      <div className="topRight">
        <ul className="topList">
          <Link to="/">
            <li className="topListItem">GUEST LIST</li>
          </Link>
          <Link to="/seatingplan">
            <li className="topListItem">SEATING PLAN</li>
          </Link>
          <Link to="/rsvp/1">
            <li className="topListItem">RSVP</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
