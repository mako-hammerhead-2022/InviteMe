import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import Navbar from '../Navbar.jsx'

it('renders log out link', () => {
  render(
    <Router initialEntries={['/']}>
      <Navbar />
    </Router>
  )
  const linkElement = screen.getByText(/RSVP/i)
  expect(linkElement).toBeInTheDocument()
})

it('renders 5 list items', () => {
  render(
    <Router initialEntries={['/']}>
      <Navbar />
    </Router>
  )
  const listItems = screen.getAllByRole('listitem')
  expect(listItems).toHaveLength(4)
})
