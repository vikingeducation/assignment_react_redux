import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
//import action constants from action

import {
	ADD_ITEM,
	PURCHASED_TOGGLE,
	REMOVE,
	FILTER,
	SORT,
	CATEGORY_FILTER
} from "./actions";

//
/*
groceryList
*/
function groceryList(state = [], action) {
	switch (action.type) {
		// adds item to list
		case ADD_ITEM:
			console.log("DATAA", action.data.id);
			return [...state, action.data];
		//set purchased to true for matched item
		case PURCHASED_TOGGLE:
			return state.map((item, i) => {
				if (item.id === action.data) {
					return {
						...item,
						status: item.status === false ? true : false
					};
				}
				return item;
			});
		case REMOVE:
			return state.filter((item, i) => {
				if (item.id !== action.data) {
					return item;
				}
			});
		case SORT: {
			let section = action.data.section.toLowerCase();
			let sorted = state.slice().sort((a, b) => {
				return a[section] < b[section] ? -1 : a[section] > b[section] ? 1 : 0;
			});
			return action.data.classname === "up" ? sorted : sorted.reverse();
		}
		default:
			return state;
	}
}

function categoryFilter(state = "All", action) {
	switch (action.type) {
		case CATEGORY_FILTER:
			return action.category;
		default:
			return state;
	}
}
/*
set filter reducers
*/
function linkFilter(state = { filter: "NotPurchased" }, action) {
	switch (action.type) {
		case FILTER:
			return {
				filter: action.filter
			};
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
	linkFilter,
	categoryFilter
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
