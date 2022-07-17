import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Auth0Provider
        domain={'dev-blnz5ahc.us.auth0.com'}
        clientId={'APUibj3fJNomrBl59ebBqywKD32Em1HS'}
        redirectUri={window.location.origin}
        audience="https://guests/api"
      >
        <App />
      </Auth0Provider>
    </Provider>,
    document.getElementById('app')
  )
})
