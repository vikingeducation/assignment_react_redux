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
  To do:
  first, initialize an array of accounts. we don't need to actually do anything to do them EXCEPT update account, so let's have an
  action/reducer that does that

  then we have a table with accounts, and a component at the top of screen that has current account (defaults to 1)
  then just simply some buttons that deposit/withrdraw an input[type=number]
  or transfer to other account (select list of account usernames except for current user)

  that's straightforward

  then date parser to filter, same as last project

  ok this is super similar to current project actually
  just need to "update" accounts properly!


*/