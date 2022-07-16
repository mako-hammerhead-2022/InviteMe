import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
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

          <Link to="/addguest">
            <li className="topListItem">ADD GUEST</li>
          </Link>
          {/* <Link to={`/rsvp/${id}`}> */}
          <Link to="/rsvp">
            <li className="topListItem">RSVP</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
