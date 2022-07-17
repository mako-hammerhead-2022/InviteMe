// app.test.js
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
// import {App, LocationDisplay} from './app'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import { MemoryRouter as Router } from 'react-router-dom'
import GuestList from './GuestList.jsx'
import { Provider } from 'react-redux'

describe('<GuestList />', () => {
  it('shows the guest name', () => {
    render(
      <Router>
        <GuestList />
      </Router>
    )
    let heading = screen.getByRole('heading')
    expect(heading).toContainHTML('Guest Name')
  })
})
