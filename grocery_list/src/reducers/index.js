import {
	ACTION_ADD_ITEM,
	ACTION_PURCHASE_ITEM,
	SET_PURCHASED_FILTER,
	SET_CATEGORY_FILTER,
	SET_SORT_BY
} from '../actions';

/*
 * items
 * id, name, amount, category, purchased
 */

const initialState = {
	items: []
};

const groceryListApp = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.data]
			};

		case ACTION_PURCHASE_ITEM:
			const items = state.items.map(item => {
				if (item.id === action.data) {
					item.purchased = true;
				}
				return item;
			});

			return {
				...state,
				items
			};

		default:
			return state;
	}
};

export const purchasedFilter = (state = 'SHOW_ALL', action) =>
	action.type === SET_PURCHASED_FILTER ? action.data : state;
export const categoryFilter = (state = 'SHOW_ALL', action) =>
	action.type === SET_CATEGORY_FILTER ? action.data : state;
export const sortBy = (state = 'Id', action) =>
	action.type === SET_SORT_BY ? action.data : state;

export default groceryListApp;
