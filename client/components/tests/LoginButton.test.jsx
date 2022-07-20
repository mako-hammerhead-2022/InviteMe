import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import LoginButton from '../LoginButton'

describe('<LoginPage />', () => {
  it('renders on the screen', () => {
    render(<LoginButton />)
    const login = screen.getByText('Sign in').closest('button')
    expect(login.textContent).toBe('Sign in')
  })
})
