import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { groceriesApp } from "./reducers";
import { addItem, purchaseToggle, filter, sort, listTotal } from "./actions";

/****************************
See my grocery list items (remember you can always initialize your reducer or add a preloaded state to the store to see if this works).

Add a new item to my grocery list. The item should have a name/description and optional fields for amount and category.

Indicate an item has been purchased.

Set filters for purchased/not purchased/all, categories/all.

Set sort by name/description.
*****************************/
let store = createStore(
	groceriesApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//logs state after each store.dispatch
let unsubscribe = store.subscribe(() => {
	console.log("Dispatches", store.getState());
});
console.log("initial state", store.getState());
//dispatch actions
//add new item to list with

store.dispatch(
	addItem({
		category: "snacks",
		name: "ice-cream",
		description: "vanilla",
		status: false,
		amount: 3,
		price: 1
	})
);
//  name, description, optionas(amount, category)
store.dispatch(
	addItem({
		category: "grains",
		name: "cereal",
		description: "breakfast",
		status: false,
		amount: 2,
		price: 2
	})
);

store.dispatch(
	addItem({
		category: "fruit",
		name: "apples",
		description: "diet",
		status: false,
		amount: 5,
		price: 3
	})
);

store.dispatch(
	addItem({
		category: "fruit",
		name: "bananas",
		description: "diet",
		status: false,
		amount: 12,
		price: 2
	})
);

store.dispatch(
	addItem({
		category: "fruit",
		name: "kiwis",
		description: "diet",
		status: false,
		amount: 4,
		price: 5
	})
);
//

// console.log("After Dispatches", store.getState());
unsubscribe();
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById("root")
);

/****************************
When you sort the list, you're modifying the existing state object, not returning a new one: https://github.com/rollsthomas/assignment_redux_basics/blob/master/grocery_list/src/reducers.js#L13 (edited)

The best way would be to create a new array and then sort that. Either of these ways would work:
```var newState = Array.from(state);
```
or
```var newState = [... state];
```
(edited)


Also, I don't think you need to check if the state is empty. The sort function just won't do anything if it gets an empty array.


But actually, I don't think you need to sort at all. Technically the assignment just says to keep track of the sorting choice, and I think you would be fine if you just had a field like "sort": "NAME"


You could make a third reducer to keep track of the sort type, or you could bundle them all together into one big reducer for the whole app, since it's so small (edited)
*****************************/
