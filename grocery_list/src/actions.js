// create action constants to export to reducer.js
export const ADD_ITEM = "ADD_ITEM";
export const PURCHASED = "PURCHASED";
export const FILTER = "SET_FILTER";
export const SORT = "SORT";
export const LIST_TOTAL = "LIST_TOTAL";

//to set id numbers for items on list
let itemId = 1;

//create action creator functions

//  sort by name
export function sort(condition) {
	return {
		type: SORT,
		data: condition
	};
}
//add new item to list with
//  name, description, optionas(amount, category)
//
export function addItem(data) {
	return {
		type: ADD_ITEM,
		data: {
			...data,
			id: itemId++
		}
	};
}
//  indicate that a item has been purchased
export function purchased(id) {
	return {
		type: PURCHASED,
		data: id
	};
}

//  filter purchased/ not purchased, all, categories
export function filter(filter) {
	return {
		type: FILTER,
		filter
	};
}

// total of grocery item amounts

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
		status: unpurchased
  }
]
*/
