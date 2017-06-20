import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { bank } from './reducers';
import { setAccount, deposit, withdraw, transfer, filter } from './actions';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let accounts = [
  { id: 1, balance: 1000, transactions: [] },
  { id: 2, balance: 2000, transactions: [] },
  { id: 3, balance: 3000, transactions: [] }
]

const initialState = {
  accounts: accounts,
  activeAccount: 1,
  filtered: [],
  transactions: [],
}

let store = createStore(bank, initialState)

// fake some transactions
store.dispatch(setAccount(1))
store.dispatch(withdraw(400))
store.dispatch(deposit(500))
store.dispatch(setAccount(3))
store.dispatch(transfer(1, 1000))
store.dispatch(filter(new Date('6/15/2017'), new Date('7/17/2017')))

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
