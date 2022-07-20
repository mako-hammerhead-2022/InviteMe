import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

import userEvent from '@testing-library/user-event'

import Login from '../Profile.jsx'
import LoginPage from '../LoginPage.jsx'

jest.mock('@auth0/auth0-react')

const fakeUser = {
  name: 'bob',
}

describe('<Login /> renders when user is authenticated', () => {
  it('should render login message', () => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user: {
        ...fakeUser,
      },
      logout: jest.fn(),
    })

    render(
      <Router>
        <Login />
      </Router>
    )
    const loginMessage = screen.getByLabelText('login message')
    expect(loginMessage).toHaveTextContent('Thank you, bob')
  })

  describe('<Login /> renders when user is not authenticated', () => {
    it('renders a sign-in button that calls the login function when clicked', async () => {
      useAuth0.mockReturnValue({
        isAuthenticated: false,
        logout: jest.fn(),
        loginWithRedirect: jest.fn(),
      })
      render(
        <Router>
          <LoginPage />
        </Router>
      )
      const button = screen.getByRole('button', { name: /Sign in/i })
      expect(button).toBeInTheDocument()

      await userEvent.click(button)

      expect(useAuth0().loginWithRedirect).toHaveBeenCalled()
    })
  })
})
