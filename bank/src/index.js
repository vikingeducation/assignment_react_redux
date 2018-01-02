import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import cash from './reducers';
import  {VIEW_ACCOUNT,DEPOSIT_MONEY, WITHDRAW_MONEY,TRANSFER_MONEY,TRANSACTION_FILTER, viewAccount, depositMoney, withdrawMoney, transferMoney, transactionFilter} from './actions'
let store = createStore(cash);

let unsubscribe = store.subscribe(() => {
})

store.dispatch(depositMoney(1, 9999999999999));
store.dispatch(withdrawMoney(3, 920022));
store.dispatch(transferMoney(1, 2, 420)); 
store.dispatch(transactionFilter(new Date(0), new Date('2017-12-22'), 1));
console.log(store.getState());
console.table(store.getState());

unsubscribe();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
