export const ACTION_ADD_ITEM = 'ACTION_ADD_ITEM';
export const ACTION_PURCHASE_ITEM = 'ACTION_PURCHASE_ITEM';
export const SET_PURCHASED_FILTER = 'SET_PURCHASED_FILTER';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SORT_BY = 'SET_SORT_BY';

let itemId = 1;

/*
	GROCERY LIST ITEM STUFF
 */
export const addItem = data => ({
	type: ACTION_ADD_ITEM,
	data: {
		...data,
		id: itemId++
	}
});

export const purchaseItem = data => ({ type: ACTION_PURCHASE_ITEM, data });

/*
	FILTERING STUFF
 */
export const setPurchasedFilter = filter => {
	return {
		type: SET_PURCHASED_FILTER,
		data: filter
	};
};
export const setCategoryFilter = filter => {
	return {
		type: SET_CATEGORY_FILTER,
		data: filter
	};
};
export const setSortBy = prop => {
	return {
		type: SET_SORT_BY,
		data: prop
	};
};
