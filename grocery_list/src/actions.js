// create action constants to export to reducer.js
export const ADD_ITEM = "ADD_ITEM";
export const PURCHASED_TOGGLE = "PURCHASED_TOGGLE";
export const FILTER = "SET_FILTER";
export const SORT = "SORT";
export const LIST_TOTAL = "LIST_TOTAL";
export const REMOVE = "REMOVE";
export const CATEGORY_FILTER = "CATEGORY_FILTER";

//to set id numbers for items on list
let itemId = 1;

//create action creator functions

//  sort by name
export function sort(section, classname) {
	return {
		type: SORT,
		data: { section, classname }
	};
}
//add new item to list with
//  name, description, optionas(amount, category)
//
export function addItem(data) {
	//console.log("add id", itemId);
	return {
		type: ADD_ITEM,
		data: {
			...data,
			id: itemId++
		}
	};
}
//  indicate that a item has been purchased
export function purchaseToggle(id) {
	return {
		type: PURCHASED_TOGGLE,
		data: id
	};
}

export function remove(id) {
	return {
		type: REMOVE,
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

export function categoryFilter(category) {
	return {
		type: CATEGORY_FILTER,
		category
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
