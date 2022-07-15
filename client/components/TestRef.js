// import React from 'react'
// import { Provider } from 'react-redux'
// import { screen, render } from '@testing-library/react'

// import App from './App'
// import store from '../store'
// import { fetchFruits } from '../actions'

// jest.mock('../actions')

// fetchFruits.mockImplementation(() => () => {})

// test('page header includes fruit', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   const heading = screen.getByRole('heading')
//   expect(heading.innerHTML).toMatch(/Fruit/)
// })

// test('renders an <li> for each fruit', () => {
//   const fruits = ['orange', 'persimmons', 'kiwi fruit']
//   jest.spyOn(store, 'getState')
//   store.getState.mockImplementation(() => ({ fruits }))

//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   const li = screen.getAllByRole('listitem')
//   expect(li).toHaveLength(3)
// })

// test('dispatches fetchFruits action', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   expect(fetchFruits).toHaveBeenCalled()
// })

// // import { render, screen} from '@testing-library/react';
// // import {BrowserRouter, Router} from 'react-router-dom';
// // import userEvent from "@testing-library/user-event";
// // import {createMemoryHistory} from 'history';
// // import App from './App';

// // test('should redirect and update history', () => {
// //     const history = createMemoryHistory();

// //     render(<Router history={history}><App/></Router>);

// //     userEvent.click(screen.getByText(/Guest List/));

// //     expect(history.location.pathname).toEqual('/guestlist');
// // });

// // test('should redirect and update dom', () => {
// //     render(<BrowserRouter><App/></BrowserRouter>);

// //     userEvent.click(screen.getByText(/Guest List/));

// //     expect(screen.getByText(/Guest List/i)).toBeInTheDocument();
// // });
