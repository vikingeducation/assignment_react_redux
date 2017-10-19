import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { createStore } from "redux";
import { groceriesApp } from "./reducers";
import { addItem, purchased, filter, sortByName } from "./actions";

/****************************
See my grocery list items (remember you can always initialize your reducer or add a preloaded state to the store to see if this works).

Add a new item to my grocery list. The item should have a name/description and optional fields for amount and category.

Indicate an item has been purchased.

Set filters for purchased/not purchased/all, categories/all.

Set sort by name/description.
*****************************/
let store = createStore(groceriesApp);

//logs state after each store.dispatch
let unsubscribe = store.subscribe(() => {
	console.log("Dispatches", store.getState());
});
console.log("initial state", store.getState());
//dispatch actions
//add new item to list with

store.dispatch(
	addItem({
		name: "ice-cream",
		description: "vanilla",
		category: "snacks",
		amount: 3,
		status: false
	})
);
//  name, description, optionas(amount, category)
store.dispatch(
	addItem({
		name: "cereal",
		description: "breakfast",
		category: "zgrains",
		amount: 2,
		status: false
	})
);

store.dispatch(
	addItem({
		name: "apples",
		description: "diet",
		category: "fruit",
		amount: 5,
		status: false
	})
);
//  indicate that a item has been purchased
console.log("BEFORE PURCHASE");
console.log("before Purchase:", store.getState());
store.dispatch(purchased(3));
//  sort by name
console.log("BEFORE SOORTTT");
store.dispatch(sortByName());
//  filter purchased/ not purchased, all, categories
console.log("BEFORE set filter");
store.dispatch(filter("purchased"));

console.log("After Dispatches", store.getState());
unsubscribe();
ReactDOM.render(<App />, document.getElementById("root"));
