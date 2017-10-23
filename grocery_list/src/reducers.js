import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
//import action constants from action

import {
	ADD_ITEM,
	PURCHASED_TOGGLE,
	REMOVE,
	FILTER,
	SORT,
	LIST_TOTAL
} from "./actions";

/*
//sort
*/
function sort(state = null, action) {
	switch (action.type) {
		case SORT:
			return action.data;
		default:
			return state;
	}
}
//
/*
groceryList
*/
function groceryList(state = [], action) {
	switch (action.type) {
		// adds item to list
		case ADD_ITEM:
			console.log("DATAA", action.data);
			return [...state, action.data];
		//set purchased to true for matched item
		case PURCHASED_TOGGLE:
			return state.map((item, i) => {
				if (action.data === item.id) {
					if (!item.status) {
						return {
							...item,
							status: true
						};
					} else {
						return {
							...item,
							status: false
						};
					}
					return {
						...item,
						status: false ? true : false
					};
				} else {
					return item;
				}
			});
		case REMOVE:
			return;
		//case LIST_TOTAL
		default:
			return state;
	}
}

/*
set filter reducers
*/
function linkFilter(state = { filter: "All" }, action) {
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

/*
List total
*/

//combine reducers
export const groceriesApp = combineReducers({
	groceryList,
	sort,
	linkFilter,
	form: formReducer
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
