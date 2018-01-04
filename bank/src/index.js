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

let store = createStore(cash);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(transactionFilter(new Date(0), new Date("2018-01-31"), 1));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
