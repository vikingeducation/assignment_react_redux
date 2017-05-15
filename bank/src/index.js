// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import "./index.css";

import { createStore } from "redux";
import { bankApp } from "./reducers";
import {
  setSelectedAccount,
  deposit,
  withdraw,
  transfer,
  setDateFilter
} from "./actions";

let store = createStore(bankApp);

let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log(store.getState());
});

console.log("Initial bank state:", store.getState());

console.log("Setting selected account");
store.dispatch(
  setSelectedAccount({
    id: 1,
    balance: 0
  })
);

console.log("Depositing 100 into account 1");
store.dispatch(
  deposit({
    destination: 1,
    amount: 100,
    date: Date.now()
  })
);

console.log("Withdrawing 50 from account 1");
store.dispatch(
  withdraw({
    origin: 1,
    amount: 50,
    date: Date.now()
  })
);

console.log("Transferring 50 from 1 to 2");
store.dispatch(
  transfer({
    origin: 1,
    destination: 2,
    amount: 50,
    date: Date.now()
  })
);

console.log("Trying to overdraw account 1");
store.dispatch(
  withdraw({
    origin: 1,
    amount: 10000,
    date: Date.now()
  })
);

console.log("Trying to overdraw transfer from 1 to 2");
store.dispatch(
  transfer({
    origin: 1,
    destination: 2,
    amount: 10000,
    date: Date.now()
  })
);

console.log("Setting a date filter");
store.dispatch(
  setDateFilter({
    startDate: 2304925,
    endDate: 5048939
  })
);

unsubscribe();
