import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Provider } from "react-redux";

import { createStore } from "redux";
import { bankApp } from "./reducers";

const initialAccounts = {
  accounts: [
    {
      id: 1,
      balance: 0
    },
    { id: 2, balance: 100 },
    { id: 3, balance: 1000 }
  ],
  selectedAccount: null,
  transactions: []
};

let store = createStore(bankApp, { accountState: initialAccounts });
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
