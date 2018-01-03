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

{id: 1, balance: 10, transactions: [], display: []},
    {id: 2, balance: 1000, transactions: [], display: []},
    {id: 3, balance: 920022, transactions: [], display: []},

]




let store = createStore(cash, {
	accounts: bankAccounts
});

let unsubscribe = store.subscribe(() => {});
/*store.dispatch(transferMoney(1, 2, 420))
store.dispatch(transferMoney(1, 2, 420))
store.dispatch(transferMoney(1, 2, 420));
store.dispatch(transactionFilter(new Date(0), new Date("2018-12-22"), 3))*/;
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
