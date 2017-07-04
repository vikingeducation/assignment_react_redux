import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from './components/App';
import './index.css';

import {createStore} from 'redux';
import {bankApp} from './reducers';

import faker from 'faker';

let reduxDebugger = process.env.NODE_ENV === "development" ?
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() :
  {};

let accountsFromServer = [];
for (let i = 0; i < 10; i++) {
  accountsFromServer.push({
    id: i,
    username: `foobar${i}`,
    balance: faker.random.number({ min: 1000, max: 12000 })
  });
}

let store = createStore(
  bankApp,
  {
    accounts: accountsFromServer
  },
  reduxDebugger
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*
  TO DO:
  - Add forms to account details:
    - Input + Deposit Button
    - Input + Withdraw Button
    - Input + Select + Transfer Button
    
    -At first make these only "create" transactions
    -THEN, we want to make a dispatch in that onClick function
      -> have it update the account related to the currenct transaction
  
  -Add date filtering
*/