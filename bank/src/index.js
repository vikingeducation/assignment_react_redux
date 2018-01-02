import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import cash from "./reducers";
import {
  VIEW_ACCOUNT,
  DEPOSIT_MONEY,
  WITHDRAW_MONEY,
  TRANSFER_MONEY,
  TRANSACTION_FILTER,
  viewAccount,
  depositMoney,
  withdrawMoney,
  transferMoney,
  transactionFilter
} from "./actions";

//Containers
import { Provider } from "react-redux";

const bankAccounts = [

{id: 1, balance: 10, transactions: []},
    {id: 2, balance: 1000, transactions: []},
    {id: 3, balance: 920022, transactions: []},

]




let store = createStore(cash, {
	accounts: bankAccounts
});

let unsubscribe = store.subscribe(() => {});

store.dispatch(depositMoney(1, 9999999999999));
store.dispatch(withdrawMoney(3, 920022));
store.dispatch(transferMoney(1, 2, 420));
store.dispatch(transactionFilter(new Date(0), new Date("2017-12-22"), 1));
console.log(store.getState());
console.table(store.getState());

unsubscribe();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
