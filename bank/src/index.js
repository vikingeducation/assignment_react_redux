import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { bankApp } from './reducers';

// Mocked server/API response
const accountsFromServer = [
  {
    id: 111222331,
    customer: 'Jane Doe',
    balance: 346600,
    start_date: new Date(1995, 11, 17)
  }, {
    id: 111222332,
    customer: 'John Doe',
    balance: 287600,
    start_date: new Date()
  }, {
    id: 111222333,
    customer: 'Sarah Johnson',
    balance: 1463400,
    start_date: new Date(2001, 11, 29)
  }
];

export const store = createStore(bankApp, {
  accounts: accountsFromServer
});

console.log('initial state', store.getState());

store.subscribe(() => {
  console.log('current state', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
