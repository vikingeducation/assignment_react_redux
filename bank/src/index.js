import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import moment from "moment";

import { createStore, applyMiddleware } from "redux";
import { bankApp } from "./reducers";
import {
	addAccount,
	selectAccount,
	transaction,
	transfer,
	filterTransactions
} from "./actions";
// Logger middleware definition
const logger = store => next => action => {
	console.log("dispatching", action);
	let result = next(action);
	console.log("next state", store.getState());
	return result;
};
let date = new Date();

let store = createStore(bankApp); //, applyMiddleware(logger));

let unsubscribe = store.subscribe(() => {
	console.log("Dispatch", store.getState());
});
console.log("Initial State", store.getState());
//add accounts
//
//
store.dispatch(
	addAccount({
		name: "Alex",
		checkings: 1000,
		savings: 10000,
		transactions: []
	})
);

store.dispatch(
	addAccount({
		name: "Ben",
		checkings: 2000,
		savings: 10000,
		transactions: []
	})
);
// Select and account to view

store.dispatch(selectAccount(100));
// deposit into an account
console.log("before deposit $700 into 100 checking");
store.dispatch(transaction("deposit", 100, "checkings", 700, date));
// withdrawal from account
console.log("before withdrawing 1000 from 100 checkings");
store.dispatch(transaction("withdrawal", 100, "checkings", 1000, date));
console.log("before deposit 500 into 101 savings");
store.dispatch(transaction("deposit", 101, "savings", 500, date));
console.log("before withdrawal 500 from 101 checking");
store.dispatch(transaction("withdrawal", 101, "checkings", 500, date));

// transfer money from / to accounts
/*	accountFrom,
	accountFromType,
	accountTo,
	accountToTyoe,
	date,
	amount
	*/
console.log("Transfer alex checking to ben savings 500");
store.dispatch(transfer(100, "checkings", 101, "savings", date, 500));
console.log("transfer ben savings to alex checkings: 1000");
store.dispatch(transfer(101, "savings", 100, "checkings", date, 1000));
// Filter by transaction date
let dateFrom = new Date("01/12/2017").getTime();
let dateTo = new Date().getTime();
store.dispatch(filterTransactions(dateFrom, dateTo));
//set filter again
let dateFrom2 = new Date("02/12/2017").getTime();
let dateTo2 = new Date("06/12/2017").getTime();
store.dispatch(filterTransactions(dateFrom2, dateTo2));

console.log("End State", store.getState());
unsubscribe();
