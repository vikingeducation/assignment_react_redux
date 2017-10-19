import { combineReducers } from "redux";

//import action constants from action

import { ADD_ITEM, PURCHASED, FILTER, SORT } from "./actions";

//sort
function sort(state = null, action) {
	switch (action.type) {
		case SORT:
			return action.data;
		default:
			return state;
	}
}
//
//switch statement
function groceryListReducer(state = [], action) {
	switch (action.type) {
		// adds item to list
		case ADD_ITEM:
			return [...state, action.data];
		//set purchased to true for matched item
		case PURCHASED:
			return state.map((item, i) => {
				if (action.data === item.id) {
					return {
						...item,
						status: true
					};
				} else {
					return item;
				}
			});
			break;
		default:
			return state;
	}
}
//set filter reducers
function filter(state = { filter: "all" }, action) {
	switch (action.type) {
		case FILTER:
			return {
				filter: action.filter
			};
			break;
		default:
			return state;
	}
}
//purchased
//not purchased
//all
//categories

//combine reducers
export const groceriesApp = combineReducers({
	groceryListReducer,
	sort,
	filter
});
//shape of grocery list object

/*
filters: {
  all: 'All',
  purchased: 'Purchased',
  unpurchased: 'Unpurchased',
}

groceries_list: [
  {
    name: apples,
    description: diet,
    category: fruit,
    amount: 5,
  }
]
*/
