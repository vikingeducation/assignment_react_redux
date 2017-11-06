import { combineReducers } from "redux";
//import action constants from action

import {
	ADD_ITEM,
	PURCHASED_TOGGLE,
	REMOVE,
	FILTER,
	SORT,
	CATEGORY_FILTER,
	CHANGE_ICON
} from "./actions";

//
/*
groceryList
*/
function groceryList(state = [], action) {
	console.log("in reducer state", state);
	console.log("in reducer action", action);
	switch (action.type) {
		// adds item to list
		case ADD_ITEM:
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
			return action.data.classname.includes("up") ? sorted : sorted.reverse();
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
function linkFilter(state = { filter: "All" }, action) {
	switch (action.type) {
		case FILTER:
			return {
				...state,
				filter: action.filter
			};
		default:
			return state;
	}
}

/***********************
UX reducers
************************/
//additem icon toggle button
function iconStatus(state = false, action) {
	switch (action.type) {
		case CHANGE_ICON:
			return action.status;

		default:
			return state;
	}
}

//combine reducers
export const groceriesApp = combineReducers({
	groceryList,
	linkFilter,
	categoryFilter,
	iconStatus
});
