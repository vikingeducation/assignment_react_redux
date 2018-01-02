import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { bankApp } from "./reducers.js";
import {
  createAccount,
  setDateFilter,
  setAccountFilter,
  setAccountSort,
  deposit,
  withdrawl,
  transfer
} from "./actions.js";

let store = createStore(bankApp);

let unsubscribe = store.subscribe(() => {
  console.log("UPDATE", JSON.stringify(store.getState(), null, 2));
});

store.dispatch(
  createAccount({
    owner: "Max",
    balance: 10 
  })
);
store.dispatch(
  createAccount({
    owner: "Bob",
    balance: 0
  })
);

store.dispatch(
  deposit(0, 5, "2017-12-21")
);
store.dispatch(
  withdrawl(1, 10, "2017-12-22")
);
store.dispatch(
  transfer(0, 1, 5, "2017-12-23")
);

store.dispatch(setDateFilter("2017-11-15"));
store.dispatch(setAccountFilter("1"));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
